import { useState } from 'react';

const useImage = () => {

    const [imageDetails, setImageDetails] = useState(
        {
            'image': 'gay',
            'title': ' i love apple juice',
            'description': 'Apple juice lover 100k drinks apple juice'
        }
    )
      
    return {imageDetails, setImageDetails}
}

export default useImage