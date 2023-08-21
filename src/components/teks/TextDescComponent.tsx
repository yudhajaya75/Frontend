const TextDescComponent = (props: any) => {
    return (
        <div className="mx-20">
            <h5 className='font-bold sm:text-left text-4xl sm:text-3xl text-[#074288]'>
                {props.title}
            </h5>
            <div className='pt-10 text-[20px] text-justify flex flex-col gap-10' dangerouslySetInnerHTML={{ __html: props.body }}>
            </div>
        </div>
    )
}

export default TextDescComponent;