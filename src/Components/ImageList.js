

const ImageList = ({images}) => {



    return(
        <div>
             {
                images.map((image)=>(
                     <img src={image.urls.small} alt={image.alt_description} />
                ))
             }
        </div>
    )
    
}

export default ImageList;