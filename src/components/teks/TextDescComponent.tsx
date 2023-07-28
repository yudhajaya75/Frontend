

const TextDescComponent = ( props: any ) => {
    return(
        <div className="ml-[106px]">
            <h5 className='font-bold sm:text-left text-4xl sm:text-3xl text-[#074288]'>
                {props.title} 
            </h5>
            <div className='pt-10 text-justify 'dangerouslySetInnerHTML={{__html: props.body}}>
               
            </div>
        </div>
    )
}

export default TextDescComponent;