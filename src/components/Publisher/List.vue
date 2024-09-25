<script setup>
import { inject } from 'vue';
const jsonData = inject('json');
const publishers = jsonData.data.publishers;

console.log(publishers);


</script>
<template>
    <div class="w-full">

        <div class="flex justify-start mb-5">
            <a href="/publisher/new"
                class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:slate-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:slate-800">
                New Publisher
            </a>
        </div>

        <div class="flex justify-center text-2xl">
            <span>Publishers</span>
        </div>

        <div class="card mt-10">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                View
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(publisher, i) in publishers"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ publisher.id }}
                            </th>
                            <td class="px-6 py-4">
                                {{ publisher.name }}
                            </td>
                            <td class="px-6 py-4">
                                <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    :href="'/publisher/' + publisher.id">
                                    <span class="pi pi-eye"></span>
                                </a>
                            </td>
                            <td class="px-6 py-4">
                                <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    :href="'/publisher/edit/' + publisher.id">
                                    <span class="pi pi-pen-to-square"></span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>