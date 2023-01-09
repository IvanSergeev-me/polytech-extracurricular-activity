export const getImages = (files:File[]) =>{
    let newImages = [];

    if(files.length!==0){
        for (let i = 0; i<files.length; i++){
            let fileImage = {id:i, image:URL.createObjectURL(files[i])}
            newImages.push(fileImage)
        }
    }
    return newImages;
}