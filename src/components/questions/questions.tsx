import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { Skeleton } from '@mui/material';

const Dekstop = () => {
    const [content, setContent] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/questions?populate=*`)
            .then((response) => {
                setContent(response.data.data);
                setTimeout(() => setLoading(false), 4000);
            })
    }, [])
    return (
        <div className='relative left-[120px]'>
            <p className='relative lg:top-[120px] sm-440:top-7 left-20 font-bold text-[#002157] text-[30px]'>FAQ</p>
            <div className='lg:mx-[0px] sm-440:px-[200px] pt-20'>
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
                            content.map((res: any, index: number) => (
                                <Accordion style={{ backgroundColor: '#F8FCFF' }}
                                    className='relative sm-440:w-auto sm:w-auto sm-440:-ml-[300px] lg:ml-0 lg:w-full' key={index}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{res.attributes.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {res.attributes.desc}
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

export default Dekstop;