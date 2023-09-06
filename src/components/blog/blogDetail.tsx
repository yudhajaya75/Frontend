import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../blog/slider.css'

const BlogDetail = (props: any) => {
    return (
        <div>
            <div>
                <div className='relative left-[50px] top-[50px] md:flex md:gap-10'>
                    <div>
                        <img className='md:h-[500px] h-[200px] md:w-[900px] w-[350px] aspect-auto object-cover' src={props.image} alt='' />
                    </div>
                    <div className='w-[500px] flex text-justify md:text-[17px] text-[14px] md:px-0 px-20 md:-ml-0 -ml-20'>
                        <p>{props.title}</p>
                    </div>
                </div>
                <div className='pt-[100px] p-[50px]'>
                    <p className='text-justify' dangerouslySetInnerHTML={{ __html: props.body }}></p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;  
