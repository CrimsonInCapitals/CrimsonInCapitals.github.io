import Draggable from "react-draggable"
// import { Artical } from "../../../context/Articles"
import { Link } from "react-router-dom"
import { MenuFull } from "../../../components/Menu"
import { FocusedContentSection } from "../../../components/FocusedContentSection"
import { Footer } from "../../../components/Footer"
import { PageClass, URL } from "../../../classes"
import { useThemeContext } from "../../../context/theme"
import { useEffect } from "react"
import { Adobe, AFHowTo, AfterEffects, AnimationChip, Brand, Designer, Illustrator, Mockups, Motion, PersonalProject, Tutorials } from "../../../components/Chips"
import { ArticalContainer } from "../../../components/ArticalHolder"
import backgroundImage from '../../../images/articles/afhowto/linkcover.webp'
import { IMG, VIDEO } from "../../../components/fullscreenable"
import DownloadButton from "../../../components/download button"

const properties = new PageClass('Creating Mockups in Affinity','/articles/af-createmockups',6,'06/04/2026','article',{chips:[AFHowTo,Tutorials,Designer,Mockups]})

const Background =()=>{
    const style={    
        backgroundImage: URL(backgroundImage),
        backgroundSize: 'cover',
        backgroundPosition:'center bottom',
        // opacity: '30%'
    }
    return(
        <Link to={properties.route} style={style} className="fill"/>
    )
}
properties.fill = <Background/>
// properties.image = backgroundImage

const Page = ()=>{
    return(
        <ArticalContainer properties={properties}>
            <div className="bff">
                <p>Creating a symbol-based mock-up template follows a very similar workflow to creating a normal mock-up template. For that reason, I am going to run through the process twice. I’ll go through converting a normal embedded mock-up; this can be a PSD or an .af file. Then I will go through the full process from importing your photo to saving your template.</p>
                <p>If you haven’t read my other guide on using symbol-based templates, you might be wondering why you should care. The are 2 main benefits - the first is live preview, meaning the content and mock-up are side by side. The second is reduced file sizes - 60% smaller on average. </p>
                <p>For this process, I will be using a custom studio, which you can download <DownloadButton fileUrl="https://crimsonincapitals.github.io/Mockup.afstudio" fileName="Mockup.afstudio">Here</DownloadButton>. Otherwise, most tools can be found in the pixel studio but you will need to switch to the vector studio to add artboards.</p>
            </div>
            <div className="bff">
                <h2>Converting from embedded</h2>
                <p>Open your file of choice. I will be using a great template from Akoyo. Not every effect will convert when you open a PSD. For example, gradients work differently and so you will receive a message letting you know this. If you’re using an .af file, you won’t have that issue.</p>
            </div>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image1.png')} alt='opening psd error message'/>
            <p>Click the ‘Artboard Tool’ and click ‘Insert Artboard’. This will convert the image region to an artboard. I ‘m going to rename it ‘Mock-up’ but this isn’t necessary.</p>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image2.png')} alt='turing the work area into an artboards'/>
            <p>Next, we need to open the embedded file, so head to the ‘Layers’ panel on the right. Once you have the embedded file open, select the ‘Artboard Tool’ again and ‘Insert Artboard’. From here, you are going to copy that artboard and go back to the parent file. Paste it and drag it over. I prefer to place them on the left. I also prefer to rename it so that matches its description, such as ‘Cover’ or ‘Spine’. You’ll need to repeat this step for each of the embedded files.</p>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image3.png')} alt='adding the embeded artwork as an artboard'/>
            <p>Navigate to ‘Window’ &gt; ‘Vector’ &gt; ‘Symbols’ to open the symbols panel.</p>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image4.png')} alt='opening the symbols panel'/>
            <p>Select all your artwork artboards and press the ‘Create’ button on the symbols panel. You can then make copies of the artboards. You can confirm they are synced by making changes to the contents on one copy and watch it be mirrored on the others.</p>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image5.png')} alt='turning the artwork into a symbol'/>
            <div className="bff">
                <p>Going into the Layers panel, you’ll want to drag your copies to the same place as the embedded files on your mock-up artboard. Don’t make any changes to the size just yet.</p>
                <p>Going into the Layers panel, you’ll want to drag your copies to the same place as the embedded files on your mock-up artboard. Don’t make any changes to the size just yet.</p>
            </div>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image6.png')} alt='placing a copy in the same location as the embeded artwork'/>
            <div className="bff">
                <p>Now we want to copy all the properties of the embedded file to the group we just made. Change the size, align the position and change the blending mode, to make sure that everything matches. </p>
                <p>We can then drag the perspective change followed by any masks.</p>
                <p>You can now delete the embedded version. The mock-up should look exactly the same as it did before you started but now you can use the artboard to change the content.  Now you can save your file as an .af or an .aftemplate. If you want to learn how to make a template in full, continue reading.</p>
            </div>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image7.png')} alt='matching the proporties of the artwork'/>
            <p>Now you can save your file as an .af or an .aftemplate. If you want to learn how to make a template in full, continue reading.</p>
            <div className="bff">            
                <h2>Starting from the beginning</h2>
                <p>Having the object on hand for this process will make it a little easier. Otherwise, make sure you know its measurements.</p>
            </div>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image8.png')} alt='developing a mockup image'/>
            <div className="bff">
                <p>You’ve got your image and, in my case, I am using an image of a brochure I captured myself. I’m going to open the raw file and make the adjustments to the exposure, blackpoint, brightness, and any other properties until I am satisfied. I will then develop it. </p>
                <p>First thing you will need to do is make the image an artboard, so select the ‘Artboard Tool’ and click ‘Insert Artboard’.</p>
            </div>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image9.png')} alt='turining the mockup into an artboard'/>
            <div className="bff">
                <p>I’m going to go into the document setup and change from ‘pixels’ to ‘millimetres’. This way, I can measure the object and insert a new artboard that matches the size of my brochure cover. Placing a reference on this artboard will make the next part easier.</p>
                <p>Navigate to ‘Window’ &gt; ‘Vector’ &gt; ‘Symbols’ to open the symbols panel.</p>
            </div>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image10.png')} alt='adding an artboard for the artwork and opening the symbols panel'/>
            <p>Select all your artwork artboards and press the ‘Create’ button on the symbols panel. You can then create copies of the artboards. You can confirm they are synced by making changes to the contents on one copy and watch it be mirrored on the others.</p>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image11.png')} alt='turning your artwork into a symbol'/>
            <div className="bff">
                <p>Going into the Layers panel, you’ll want to drag your copies into the Mock-up artboard, on top of the image. </p>
                <p>Here, we will want to scale up the copy so that it is at least as large as where we are placing it. This isn’t essential but it will prevent the preview looking pixelated. This is just a visual discrepancy because of how live filters work but doesn’t have an impact on the export. </p>
                <p>Before you apply the perspective effects, you will need to place the artboard in a group on its own. Effects applied to the artboard directly will affect every instance of the symbol. By adding it to the group, we can manipulate it separately without affecting the other instances.</p>
            </div>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image12.png')} alt='placing the artwork in the mockup scene'/>
            <div className="bff">
            <p>Depending on the mock-up, you’ll use the ‘Perspective Tool’ or the ‘Mesh Warp Tool’.</p>
            <p>The perspective tool just requires matching the corner points of the artwork and the destination. You will start by doing the same with the mesh tool but you will need to match the Bezier handles to the curve of the object. You can double click to add a new point if you need to change direction or refine the position. The length of the handles affects how much the content is distorted relative to the opposing handle. So, on rounded surfaces you would have long handles on the front and small handles on the sides.</p>
            </div>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image13.png')} alt='matching the perspecting of the artwork to the mockup photo'/>
            <p>Now that the artwork matches the perspective of the object, we need to match the shadows and highlights. If your object is blank, this step will be easier. With brochures or devices, a blank canvas isn’t essential but for things with texture, it will be easier to use a blank reference. I am using the pen tool to create a mask for a new group. We will fill this with a rectangle set to #808080 grey. Then, go in with a mix of the gradient tool and shapes with ‘Gaussian Blur’ to add highlights and shadows, keeping everything in the group. For major shadows and highlights, I use separate groups with ‘linear burn’ and ‘add’ respectively and ‘Overlay’ for the main group. </p>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image14.png')} alt='creating a lighting map for the mockup'/>
            <p>Depending on your image you might be able to stop here. You will have a realistic mock-up that matches the original image and allows you to use the artboard to change the content. In my case, I have used a very large aperture when taking this photo, meaning not all of the brochure is fully in focus. To correct for this, we can apply a ‘Live Depth of Focus’ filter. You can find this in ‘filters’ at the bottom of the layers panel. The only caveat to using live blur filters is that they are more resource intensive, so when zooming in or during the live mock-up, you may experience slowdowns on less capable computers.</p>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/image15.png')} alt='showing your artwork on the artboard and in the mockup'/>
            <p>If you have multiple symbols, I recommend naming the artboards clearly and arranging them to match their positions on the mock-up. </p>
            <IMG className="inline" src={require('../../../images/articles/afhowto/createmockups/demofinal.webp')} alt='the final export of the mockup'/>
            <div className="bff">
                <p>At this point you are ready to save your .af or .aftemplate file. Reach out if you would like a copy of this file to dive into yourself. Sometimes exploration is the easiest way to learn.</p>
                <p>Affinity is a great tool; however, it can be hard to find guides on some subjects. If you want to learn how to do something else in Affinity, let me know.  </p>
            </div>
         </ArticalContainer>
    );
}

const Bento = ()=>{
    return(
        <Link to='../articles/amazinggrace' className='QuickBento Amazinggracebento'/>
    )
}
properties.element = <Page/> 
export default properties.get


// export const properties=[[2,2],'Amazing Grace',1,'Eye capturing visuals for a small botique','amazinggrace',<Bento,Page/>]