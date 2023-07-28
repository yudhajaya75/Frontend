const TextHeadingComponent = (props: any) => {
    return (
        <div className='font-sans '>
            <p className=' text-center text-[50px] font-bold text-[#074288]'>
                {props.heading}
            </p>

        </div>
    )

}

export default TextHeadingComponent;