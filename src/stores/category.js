import { defineStore } from "pinia";
import { ref } from "vue";
import categoryService from "@/services/category";

export const useCategoryStore = defineStore("category", () => {
    const categories = ref([]);
    const category = ref([]);
    const newCategory = ref([]);
    
    const getCategories = async () => {
        try {
        const data = await categoryService.getCategories();
        categories.value = data;
        } catch (error) {
        console.error(error);
        }
    };
    
    const getCategory = async (id) => {
        try {
        const data = await categoryService.getCategory(id);
        category.value = data;
        } catch (error) {
        console.error(error);
        }
    };
    
    const createCategory = async (category) => {
        try {
        const data = await categoryService.createCategory(category);
        newCategory.value = data;
        } catch (error) {
        console.error(error);
        }
    };
    
    const updateCategory = async (category) => {
        try {
        await categoryService.updateCategory(category);
        getCategory(category.id);
        } catch (error) {
        console.error(error);
        }
    };
    
    const deleteCategory = async (id) => {
        try {
        await categoryService.deleteCategory(id);
        return true;
        } catch (error) {
        console.error(error);
        }
    };
    
    return {
        categories,
        category,
        newCategory,
        getCategories,
        getCategory,
        createCategory,
        updateCategory,
        deleteCategory,
    };
    });