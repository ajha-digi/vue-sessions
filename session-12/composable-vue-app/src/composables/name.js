import { ref } from "vue";
import { faker } from "@faker-js/faker";

import { useEventListener } from "./event";

export function useName() {
  const firstName = ref();
  const lastName = ref();

  useEventListener(window, "mousemove", () => {
    firstName.value = faker.person.firstName();
    lastName.value = faker.person.lastName();
  });

  return {
    firstName,
    lastName,
  };
}
