import React, { Component } from 'react'
import Axios from 'axios'


import './App.css'

class App extends Component {
    state = {
        images: [],
        selectedImage: null,
    }
    async componentDidMount() {
        const res = await Axios.get('https://api.unsplash.com/photos?client_id=1n2REiNzTr7sAvwegSmdAntYnkyOVejNcUDPhCPHG-Q')
        this.setState({
            images: res.data
        })
    }
    handleSelection = (image) => {
        this.setState({
            selectedImage: image
        })
    }
    render() {
        const { images, selectedImage } = this.state
        console.log(images)

        return (
            <div className="app">
                <h1>Unsplash Image Gallery!</h1>
                {
                    <img src={
                        selectedImage && selectedImage.urls.small
                    } alt="" srcset="" />
                }

                <div className="image-grid">
                    {images && images.map((image, id) => (
                        <div className="image" key={id} onClick={() => this.handleSelection(image)}>
                            <img src={image.urls.small} alt="Sample" />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default App
