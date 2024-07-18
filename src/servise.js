import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://back-end-kde2.onrender.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    login(credentials) {
        return apiClient.post('api-auth/login/', credentials);
    },
    logout() {
        return apiClient.post('api-auth/logout/');
    },
    getAllProducts() {
        return apiClient.get('api/products/all');
    },
    createProduct(productData) {
        return apiClient.post('api/products/create', productData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    updateProduct(productId, updatedData) {
        return apiClient.put(`api/products/update/${productId}`, updatedData);
    },
    deleteProduct(productId) {
        return apiClient.delete(`api/products/delete/${productId}`);
    },
    getAllCategories() {
        return apiClient.get('api/category/all');
    },
    createCategory(categoryData) {
        return apiClient.post('api/category/create', categoryData);
    },
    updateCategory(categoryId, updatedData) {
        return apiClient.put(`api/category/update/${categoryId}`, updatedData);
    },
    deleteCategory(categoryId) {
        return apiClient.delete(`api/category/delete/${categoryId}`);
    },
};
