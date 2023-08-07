import { ref } from "vue";

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);

    const getData = async () => {
        try {
            const resp = await fetch(url);
            const respData = await resp.json();
            data.value = respData;
        } catch (error) {
            error.value = error
        }
    }

    getData();

    return {
        data, error
    }

}
