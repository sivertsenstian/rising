import { useCollection, useDocument, useFirestore } from "vuefire";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import _isNil from "lodash/isNil";
import { v4 as uuidv4 } from "uuid";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { computed, ref } from "vue";
import moment from "moment";
import _sortBy from "lodash/sortBy";
import _first from "lodash/first";

export const useChangelogStore = defineStore("changelog", () => {
  const db = useFirestore();
  const { data: changelogs, pending } = useCollection(
    collection(db, "changelog"),
  );
  const admin = useDocument(
    doc(db, "administrator", String("gER0RymNIqRIdXsZUEg2")),
  );

  const busy = ref(false);

  const changelog = (): any => ({
    id: uuidv4(),
    created: moment().toDate(),
    version: "",
    dynasty: [],
    gdf: [],
  });

  const item = (): any => ({
    id: uuidv4(),
    created: moment().toDate(),
    name: "",
    description: "",
    type: "",
  });

  // Changelogs
  const save = async (changelog: any, race: string, item: any) => {
    try {
      busy.value = true;

      changelog[race] = [...changelog[race], item];
      await setDoc(doc(db, "changelog", changelog.id), changelog);
    } catch (e) {
      console.error(e);
    } finally {
      busy.value = false;
    }
  };

  const update = async (changelog: any) => {
    try {
      busy.value = true;
      if (changelog.id) {
        const reference = doc(db, "changelog", changelog.id);
        changelog.updated = moment().toDate();
        await updateDoc(reference, changelog as any);
      }
    } catch (e) {
      console.error(e);
    } finally {
      busy.value = false;
    }
  };

  const add = async (changelog: any, race: string) => {
    await save(changelog, race, item());
  };

  const remove = async (changelog: any, race: string, item: Partial<any>) => {
    try {
      busy.value = true;
      if (changelog.id && item.id) {
        changelog[race] = changelog[race].filter((v: any) => v.id !== item.id);
        await setDoc(doc(db, "changelog", changelog.id), changelog);
      }
    } catch (e) {
      console.error(e);
    } finally {
      busy.value = false;
    }
  };

  const claim = async (secret: string) => {
    if (
      !_isNil(admin.value) &&
      secret === admin.value.secret &&
      secret.length > 0
    ) {
      try {
        data.value.admin = true;
      } catch (error) {
        return false;
      }
      return true;
    }
    return false;
  };

  const canEdit = (): boolean => data.value.admin ?? false;

  const data = useStorage("tempest/changelog", {
    admin: false,
  } as any);

  const upcoming = computed(() => _first(_sortBy(changelogs.value, "created")));

  return {
    upcoming,
    changelogs,
    pending,
    data,
    save,
    add,
    update,
    remove,
    busy,
    canEdit,
    claim,
  };
});
