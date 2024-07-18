import axios from 'axios';


const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxMzE3NjQzLCJpYXQiOjE3MjEzMTczNDMsImp0aSI6ImU4Y2EyYWRlNDJmMTQ5ZTBhMDEyYzMwNzY1MTFiMzgyIiwidXNlcl9pZCI6MX0.NxzhI-oZEcq-HG7PVnal3iiWoSzMLEs4j_qnOOpcv9Y";

const apiClient = axios.create({
    baseURL: 'https://back-end-kde2.onrender.com/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
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
    createProduct() {
        return apiClient.post('api/products/create')
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
