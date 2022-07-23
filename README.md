# ecommerce

JS AMAZONA

34. Create Product

    1. create product model
    2. implement create product route
    3. create product function in api.js
    4. call create product function in ProductListScreen
    5. redirect to edit product

35. Edit Product UI

    1. create ProductEditScreen.js
    2. load product data from backend
    3. handle form submit
    4. save product in backend

36. Edit Product Backend

    1. handle form submit
    2. create updateProduct
    3. save product in backend

37. Upload Product Image

    1. npm install multer
    2. create routes/uploadRoute.js
    3. import express and multer
    4. create disk storage with Date.now().jpg as filename
    5. set upload as multer({ storage })
    6. router.post('/', upload.single('image'))
    7. return req.file.path
    8. app.use('/api/uploads',uploadRoute) in server.js
    9. create uploads folder and put empty file.txt there.
    10. ProductEditScreen.js
    11. create file input and set id to image-file
    12. after_render() handle image-file change
    13. create form data
    14. call uploadProductImage()
    15. create uploadProductImage in api.js
    16. update server.js

38. Build Project

    1. create build script for frontend
    2. create build script for backend
    3. update sever.js to serve frontend build folder and uploads folder
    4. stop running frontend
    5. npm run build
    6. check localhost:5000 for running website and showing images

39. Delete Product
    1. update ProductListScreen.js
    2. handle delete button
    3. rerender after deletion
