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
    <Box sx={{ mb: 4 }}>
      {/* Enhanced Timeline Header */}
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 50%, #fd79a8 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 0.5
          }}
        >
          5-Day Visit Timeline
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            fontSize: '0.9rem',
            opacity: 0.8
          }}
        >
          Select a day to view detailed events
        </Typography>
      </Box>

      {/* Enhanced Timeline Container */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 4,
          px: 3,
          background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 30%, #e3f2fd 100%)',
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(108, 92, 231, 0.12), 0 4px 16px rgba(0,0,0,0.08)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 4,
            padding: 2,
            background: 'linear-gradient(145deg, rgba(108, 92, 231, 0.15), rgba(253, 121, 168, 0.15), rgba(163, 155, 254, 0.15))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'exclude',
            maskComposite: 'exclude',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '10%',
            right: '10%',
            height: '3px',
            background: 'linear-gradient(90deg, rgba(108, 92, 231, 0.3) 0%, rgba(163, 155, 254, 0.5) 50%, rgba(253, 121, 168, 0.3) 100%)',
            borderRadius: '2px',
            transform: 'translateY(-50%)',
            zIndex: 0,
          }
        }}
      >
        {days.map((day, index) => (
          <motion.div
            key={day.id}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            style={{ zIndex: 1 }}
          >
            <ButtonBase
              onClick={() => onDaySelect(day.id)}
              sx={{
                borderRadius: 5,
                p: 1.5,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                '&:hover': {
                  '& .day-container': {
                    transform: 'translateY(-3px)',
                  },
                  '& .avatar-glow': {
                    opacity: selectedDay === day.id ? 1 : 0.6,
                    transform: 'scale(1.1)',
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
                  gap: 1.5,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: selectedDay === day.id ? 'primary.main' : 'text.secondary',
                    fontWeight: selectedDay === day.id ? 800 : 600,
                    fontSize: '0.8rem',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    textShadow: selectedDay === day.id ? '0 2px 4px rgba(108, 92, 231, 0.3)' : 'none',
                  }}
                >
                  {day.date}
                </Typography>
                
                <Box sx={{ position: 'relative' }}>
                  {/* Enhanced glow effect */}
                  <Box
                    className="avatar-glow"
                    sx={{
                      position: 'absolute',
                      inset: -6,
                      borderRadius: '50%',
                      background: selectedDay === day.id 
                        ? 'linear-gradient(45deg, #6c5ce7, #a29bfe, #fd79a8)'
                        : 'linear-gradient(45deg, rgba(108, 92, 231, 0.3), rgba(162, 155, 254, 0.3))',
                      opacity: selectedDay === day.id ? 0.8 : 0,
                      filter: 'blur(12px)',
                      transition: 'all 0.4s ease',
                      zIndex: -1,
                    }}
                  />
                  
                  <Avatar
                    sx={{
                      width: 72,
                      height: 72,
                      bgcolor: selectedDay === day.id ? 'primary.main' : 'background.paper',
                      border: selectedDay === day.id ? '3px solid rgba(255,255,255,0.8)' : '3px solid rgba(108, 92, 231, 0.25)',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontSize: '1.8rem',
                      boxShadow: selectedDay === day.id 
                        ? '0 12px 40px rgba(108, 92, 231, 0.4), 0 6px 20px rgba(108, 92, 231, 0.3), inset 0 2px 0 rgba(255,255,255,0.4)' 
                        : '0 6px 20px rgba(0,0,0,0.12), 0 3px 12px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.8)',
                      background: selectedDay === day.id 
                        ? 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 50%, #667eea 100%)'
                        : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%)',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        background: selectedDay === day.id 
                          ? 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)'
                          : 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
                        pointerEvents: 'none',
                      },
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
                  
                  {/* Active indicator with enhanced styling */}
                  {selectedDay === day.id && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: -8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
                          boxShadow: '0 4px 12px rgba(108, 92, 231, 0.6), 0 2px 6px rgba(108, 92, 231, 0.4)',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 2,
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.8)',
                          }
                        }}
                      />
                    </motion.div>
                  )}
                </Box>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: selectedDay === day.id ? 'primary.main' : 'text.secondary',
                    fontWeight: selectedDay === day.id ? 800 : 600,
                    fontSize: '0.8rem',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    textShadow: selectedDay === day.id ? '0 2px 4px rgba(108, 92, 231, 0.3)' : 'none',
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
