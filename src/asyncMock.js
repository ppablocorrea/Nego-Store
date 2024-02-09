const products = [
    {id: '1', name: 'Remera Surf Blanca', price: 750, category: 'Remeras', img: 'https://i.ibb.co/dkpjRzh/Dise-o-sin-t-tulo-2.png', stock: 15, description: 'Descripción de Remera Surf Blanca'},
    {id: '2', name: 'Remera Limited Edition', price: 900, category: 'Remeras', img: 'https://i.ibb.co/zbqr0cq/Dise-o-sin-t-tulo.png', stock: 15, description: 'Descripción de Remera Limited Edition'},
    {id: '3', name: 'Remera Denim Generation', price: 750, category: 'Remeras', img: 'https://i.ibb.co/XpvNK0w/8a7bf711-f818-4497-a177-614a9e3d3ba8.png', stock: 15, description: 'Descripción de Remera Denim Generation'},
    {id: '4', name: 'Pantalon Jean Blanco', price: 1200, category: 'Jeans', img: 'https://i.ibb.co/2Wvkz86/Dise-o-sin-t-tulo-4.png', stock: 15, description: 'Descripción de Pantalon Jean Blanco'},
    {id: '5', name: 'Pantalon Jean Casual', price: 990, category: 'Jeans', img: 'https://i.ibb.co/51HKfn3/Dise-o-sin-t-tulo-5.png', stock: 15, description: 'Descripción de Pantalon Jean Casual'},
    {id: '6', name: 'Pantalon Jean Negro', price: 1000, category: 'Jeans', img: 'https://i.ibb.co/QKMwp9c/Dise-o-sin-t-tulo-6.png', stock: 15, description: 'Descripción de Pantalon Jean Negro'},
    {id: '7', name: 'Buzo Aesthetic', price: 1200, category: 'Buzos', img: 'https://i.ibb.co/vx9dq9Y/Dise-o-sin-t-tulo-7.png', stock: 15, description: 'Descripción de Buzo Aesthetic'},
    {id: '8', name: 'Buzo Orange Model', price: 1200, category: 'Buzos', img: 'https://i.ibb.co/WWFSh2Y/Dise-o-sin-t-tulo-8.png', stock: 15, description: 'Descripción de Buzo Orange Model'},
    {id: '9', name: 'Gorra Negra', price: 500, category: 'Gorras', img: 'https://i.ibb.co/8KyDWRq/Dise-o-sin-t-tulo-10.png', stock: 15, description: 'Descripción de Gorra Negra'},
    {id: '10', name: 'Gorra Rosada', price: 500, category: 'Gorras', img: 'https://i.ibb.co/XYQb1d5/Dise-o-sin-t-tulo-11.png', stock: 15, description: 'Descripción de Gorra Rosada'},
    {id: '11', name: 'Cartera Casual', price: 650, category: 'Coleccion', img: 'https://i.ibb.co/6BdxDnD/Dise-o-sin-t-tulo-12.png', stock: 15, description: 'Descripción de Cartera Casual'},
    {id: '12', name: 'Medias Rayo', price: 300, category: 'Coleccion', img: 'https://i.ibb.co/85VsnQk/Dise-o-sin-t-tulo-13.png', stock: 15, description: 'Descripción de Medias Rayo'},
    {id: '13', name: 'Medias Pizza', price: 300, category: 'Coleccion', img: 'https://i.ibb.co/HYHXc5V/Dise-o-sin-t-tulo-14.png', stock: 15, description: 'Descripción de Medias Pizza'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}