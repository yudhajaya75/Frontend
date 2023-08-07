import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { Skeleton } from '@mui/material';

const Founding = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth <= 440 ? <Mobile /> : <SimpleAccordion />;
};

const SimpleAccordion = () => {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const url = 'http://localhost:4001/question';
    useEffect(() => {
        axios.get(url).then((response) => {
            setContent(response.data.data);
            setTimeout(() => setLoading(false), 4000);
        })
    }, [])
    return (
        <div className='relative left-[120px]'>
            <p className='relative top-[90px] left-20 font-bold text-[#002157] text-[30px]'>FAQ</p>
            <div className='pl-[200px] pr-[200px] pb-[100px] pt-[50px]'>
                {loading ? (
                    <div>
                        {[...Array(4)].map((_, index) => (
                            <div key={index}>
                                <div className='relative top-[0px] p-1'>
                                    <Skeleton variant="rectangular" width={1000} height={10} />
                                    <Skeleton variant="rectangular" width={1000} height={10} />
                                    <Skeleton variant="rectangular" width={1000} height={10} />
                                    <Skeleton variant="rectangular" width={1000} height={10} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        {
                            content.map((res: any) => (
                                <Accordion style={{ backgroundColor: '#F8FCFF' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{res.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {res.desc}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

const Mobile = () => {
    return (
        <div className='relative right-[60px]'>
            <p className='relative top-[90px] left-20 font-bold text-[#002157] text-[30px]'>FAQ</p>
            <div className='relative left-10 pl-[120px] pb-[100px] pt-[50px]'>
                <Accordion style={{ backgroundColor: '#F8FCFF' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Pertanyaan 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ backgroundColor: '#F8FCFF' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Pertanyaan 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ backgroundColor: '#F8FCFF' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Pertanyaan 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ backgroundColor: '#F8FCFF' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Pertanyaan 4</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ backgroundColor: '#F8FCFF' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Pertanyaan 5</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}
export default Founding;

// import React, { useState, useEffect } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const Founding = () => {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return windowWidth <= 440 ? <Mobile /> : <SimpleAccordion />;
// };


// const SimpleAccordion = () => {
//     return (
//         <div className='relative left-[120px]'>
//             <p className='relative top-[90px] left-20 font-bold text-[#002157] text-[30px]'>FAQ</p>
//             <div className='pl-[200px] pr-[200px] pb-[100px] pt-[50px]'>
//                 <Accordion style={{ backgroundColor: '#F8FCFF' }}>
//                     <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel1a-content"
//                         id="panel1a-header"
//                     >
//                         <Typography>Pertanyaan 1</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion style={{ backgroundColor: '#F8FCFF' }}>
//                     <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2a-content"
//                         id="panel2a-header"
//                     >
//                         <Typography>Pertanyaan 2</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion style={{ backgroundColor: '#F8FCFF' }}>
//                     <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2a-content"
//                         id="panel2a-header"
//                     >
//                         <Typography>Pertanyaan 3</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion style={{ backgroundColor: '#F8FCFF' }}>
//                     <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2a-content"
//                         id="panel2a-header"
//                     >
//                         <Typography>Pertanyaan 4</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion style={{ backgroundColor: '#F8FCFF' }}>
//                     <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2a-content"
//                         id="panel2a-header"
//                     >
//                         <Typography>Pertanyaan 5</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//             </div>
//             {/* <Accordion disabled>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel3a-content"
//                     id="panel3a-header"
//                 >
//                     <Typography>Disabled Accordion</Typography>
//                 </AccordionSummary>
//             </Accordion> */}
//         </div>
//     );
// }

// const Mobile = () => {
//     return (
//         <div className='relative right-[60px]'>
//             <p className='relative top-[90px] left-20 font-bold text-[#002157] text-[30px]'>FAQ</p>
//             <div className='relative left-10 pl-[120px] pb-[100px] pt-[50px]'>
//                 <Accordion style={{ backgroundColor: '#F8FCFF' }}>
//                     <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel1a-content"
//                         id="panel1a-header"
//                     >
//                         <Typography>Pertanyaan 1</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion style={{ backgroundColor: '#F8FCFF' }}>
//                     <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2a-content"
//                         id="panel2a-header"
//                     >
//                         <Typography>Pertanyaan 2</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion style={{ backgroundColor: '#F8FCFF' }}>
//                     <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2a-content"
//                         id="panel2a-header"
//                     >
//                         <Typography>Pertanyaan 3</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion style={{ backgroundColor: '#F8FCFF' }}>
//                     <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2a-content"
//                         id="panel2a-header"
//                     >
//                         <Typography>Pertanyaan 4</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion style={{ backgroundColor: '#F8FCFF' }}>
//                     <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2a-content"
//                         id="panel2a-header"
//                     >
//                         <Typography>Pertanyaan 5</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                             malesuada lacus ex, sit amet blandit leo lobortis eget.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//             </div>
//         </div>
//     );
// }
// export default Founding;