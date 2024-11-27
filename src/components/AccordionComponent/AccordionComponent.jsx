import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { FaAngleDown } from "react-icons/fa6";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { ModelPlayVideo } from '../../components/Models/ModelPlayVideo'
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<FaAngleDown  sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#F7F9FA',
  padding:"0 24px",
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export const AccordionComponent = () => {
  const [expandedPanels, setExpandedPanels] = useState({});
  const [openModal, setOpenModal] = useState(false)
  const {t} = useTranslation();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpandedPanels((prevExpandedPanels) => ({
      ...prevExpandedPanels,
      [panel]: newExpanded,
    }));
  };


  return (
    <div>
      <ModelPlayVideo openModal={openModal} setOpenModal={setOpenModal}/>
      <Accordion expanded={!!expandedPanels['panel1']} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className='flex justify-between w-full'>
            <p className='font-bold'>Giới thiệu về giảng viên & khóa học</p>
            <p className="flex items-center text-sm">9<span>{t(" bài giảng")}</span><img className='w-4' src="assets/icons/dot-svgrepo-com.svg" alt="" />13 <span>{t(" phút")}</span></p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <div>
                <li className='flex justify-between items-center'>
                  <p className='flex items-center gap-3'>
                    <img className='w-4 h-4' src="assets/icons/document-new-svgrepo-com.svg" alt="" />
                    Download Slide của khoá học.
                  </p>
                  <p className='text-[#6a6f73] text-sm'>
                    <span></span>
                    00:07
                  </p>
                </li>
                <li className='flex justify-between items-center'>
                  <p className='flex items-center gap-3'>
                    <img className='w-4 h-4' src="assets/icons/document-new-svgrepo-com.svg" alt="" />
                    Download Slide của khoá học.
                  </p>
                  <p className='text-[#6a6f73] text-sm'>
                    <span></span>
                    00:07
                  </p>
                </li>
                <li className='flex justify-between items-center'>
                  <p className='flex items-center gap-3'>
                    <img className='w-4 h-4' src="assets/icons/document-new-svgrepo-com.svg" alt="" />
                    Download Slide của khoá học.
                  </p>
                  <p className='text-[#6a6f73] text-sm'>
                    <span></span>
                    00:07
                  </p>
                </li>
                <li className='flex justify-between items-center'>
                  <p className='flex items-center gap-3'>
                    <img className='w-4 h-4' src="assets/icons/document-new-svgrepo-com.svg" alt="" />
                    Download Slide của khoá học.
                  </p>
                  <p className='text-[#6a6f73] text-sm'>
                    <span></span>
                    00:07
                  </p>
                </li>
                <li className='flex justify-between items-center'>
                  <p className='flex items-center gap-3 underline text-eighth cursor-pointer hover:text-[#371783]' onClick={()=>setOpenModal(true)}>
                    <img className='w-4 h-4' src="assets/icons/tv-svgrepo-com.svg" alt="" />
                    Tổng quan, cấu trúc và học viên mục tiêu
                  </p>
                  <p className='text-[#6a6f73] text-sm'>
                    <span className='underline text-eighth cursor-pointer mr-8 hover:text-[#371783]' onClick={()=>setOpenModal(true)}>Xem trước</span>
                    00:07
                  </p>
                </li>
                <li className='flex justify-between items-center'>
                  <p className='flex items-center gap-3'>
                    <img className='w-4 h-4' src="assets/icons/document-new-svgrepo-com.svg" alt="" />
                    Giới thiệu giao diện Canva Glow up
                  </p>
                  <p className='text-[#6a6f73] text-sm'>
                    00:07
                  </p>
                </li>
              </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={!!expandedPanels['panel2']} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className='flex justify-between w-full'>
            <p className='font-bold'>Giới thiệu về giảng viên & khóa học</p>
            <p className="flex items-center text-xs">9<span>{t(" bài giảng")}</span><img className='w-4' src="assets/icons/dot-svgrepo-com.svg" alt="" />13 <span>{t(" phút")}</span></p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={!!expandedPanels['panel3']} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className='flex justify-between w-full'>
            <p className='font-bold'>Giới thiệu về giảng viên & khóa học</p>
            <p className="flex items-center text-xs">9<span>{t(" bài giảng")}</span><img className='w-4' src="assets/icons/dot-svgrepo-com.svg" alt="" />13 <span>{t(" phút")}</span></p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


