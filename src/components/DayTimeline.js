import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  ButtonBase,
} from '@mui/material';
import { motion } from 'framer-motion';
import TruckIcon from './TruckIcon';
import TimelineDay1Icon from './TimelineDay1Icon';
import TimelineDay2Icon from './TimelineDay2Icon';
import TimelineDay4Icon from './TimelineDay4Icon';
import TimelineDay5Icon from './TimelineDay5Icon';

const DayTimeline = ({ days, selectedDay, onDaySelect }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 3,
          px: 2,
          background: 'linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)',
          borderRadius: 3,
          boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 3,
            padding: 1,
            background: 'linear-gradient(145deg, rgba(108, 92, 231, 0.1), rgba(253, 121, 168, 0.1))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'exclude',
            maskComposite: 'exclude',
          }
        }}
      >
        {days.map((day, index) => (
          <motion.div
            key={day.id}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ButtonBase
              onClick={() => onDaySelect(day.id)}
              sx={{
                borderRadius: 4,
                p: 1,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                '&:hover': {
                  '& .day-container': {
                    transform: 'translateY(-2px)',
                  }
                }
              }}
            >
              <Box
                className="day-container"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: selectedDay === day.id ? 'primary.main' : 'text.secondary',
                    fontWeight: selectedDay === day.id ? 700 : 500,
                    fontSize: '0.75rem',
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                  }}
                >
                  {day.date}
                </Typography>
                
                <Box sx={{ position: 'relative' }}>
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: selectedDay === day.id ? 'primary.main' : 'background.paper',
                      border: selectedDay === day.id ? 'none' : '3px solid',
                      borderColor: selectedDay === day.id ? 'transparent' : 'rgba(108, 92, 231, 0.2)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontSize: '1.6rem',
                      boxShadow: selectedDay === day.id 
                        ? '0 8px 32px rgba(108, 92, 231, 0.4), 0 4px 16px rgba(108, 92, 231, 0.2)' 
                        : '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)',
                      background: selectedDay === day.id 
                        ? 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)'
                        : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      position: 'relative',
                      '&::before': selectedDay === day.id ? {
                        content: '""',
                        position: 'absolute',
                        inset: -2,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #6c5ce7, #a29bfe, #fd79a8)',
                        opacity: 0.3,
                        filter: 'blur(8px)',
                        zIndex: -1,
                      } : {},
                    }}
                  >
                    {selectedDay === day.id ? (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 25,
                          delay: 0.1 
                        }}
                      >
                        {day.id === 0 ? (
                          <TimelineDay1Icon width={48} height={48} color="white" />
                        ) : day.id === 1 ? (
                          <TimelineDay2Icon width={48} height={48} color="white" />
                        ) : day.id === 3 ? (
                          <TimelineDay4Icon width={48} height={47} color="white" />
                        ) : day.id === 4 ? (
                          <TimelineDay5Icon width={48} height={48} color="white" />
                        ) : (
                          <TruckIcon width={24} height={18} color="white" />
                        )}
                      </motion.div>
                    ) : (
                      day.id === 0 ? (
                        <TimelineDay1Icon width={48} height={48} color="#6F25D2" />
                      ) : day.id === 1 ? (
                        <TimelineDay2Icon width={48} height={48} color="#6F25D2" />
                      ) : day.id === 3 ? (
                        <TimelineDay4Icon width={48} height={47} color="#6F25D2" />
                      ) : day.id === 4 ? (
                        <TimelineDay5Icon width={48} height={48} color="#6F25D2" />
                      ) : (
                        <TruckIcon width={24} height={18} color="#6c757d" />
                      )
                    )}
                  </Avatar>
                  
                  {/* Active indicator dot */}
                  {selectedDay === day.id && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: -4,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          boxShadow: '0 2px 8px rgba(108, 92, 231, 0.6)',
                        }}
                      />
                    </motion.div>
                  )}
                </Box>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: selectedDay === day.id ? 'primary.main' : 'text.secondary',
                    fontWeight: selectedDay === day.id ? 700 : 500,
                    fontSize: '0.75rem',
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                  }}
                >
                  {day.day}
                </Typography>
              </Box>
            </ButtonBase>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default DayTimeline;
