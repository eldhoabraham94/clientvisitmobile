import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  ButtonBase,
} from '@mui/material';
import { motion } from 'framer-motion';
import TruckIcon from './TruckIcon.jsx';
import AeroplaneIcon from './AeroplaneIcon.jsx';
import BusinessMeetingIcon from './BusinessMeetingIcon.jsx';
import LeadershipIcon from './LeadershipIcon.jsx';
import DepartureIcon from './DepartureIcon.jsx';

const DayTimeline = ({ days, selectedDay, onDaySelect }) => {
  // Helper function to get responsive icon size
  const getIconSize = (isLarge = false) => {
    return {
      xs: isLarge ? 32 : 24,
      sm: isLarge ? 40 : 30,
      md: isLarge ? 48 : 36
    };
  };

  return (
    <Box sx={{ mb: 4 }}>
      {/* Responsive Timeline Container */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 1.5, sm: 2, md: 3 },
          background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 30%, #e3f2fd 100%)',
          borderRadius: { xs: 2, sm: 3, md: 4 },
          boxShadow: '0 8px 32px rgba(108, 92, 231, 0.12), 0 4px 16px rgba(0,0,0,0.08)',
          position: 'relative',
          overflow: 'hidden',
          gap: { xs: 0.5, sm: 1, md: 0 },
          flexWrap: { xs: 'nowrap', sm: 'nowrap' },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: { xs: 2, sm: 3, md: 4 },
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
            left: { xs: '5%', sm: '8%', md: '10%' },
            right: { xs: '5%', sm: '8%', md: '10%' },
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
                borderRadius: { xs: 3, sm: 4, md: 5 },
                p: { xs: 0.5, sm: 1, md: 1.5 },
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                minWidth: { xs: 'auto', sm: 'auto' },
                '&:hover': {
                  '& .day-container': {
                    transform: { xs: 'translateY(-1px)', sm: 'translateY(-2px)', md: 'translateY(-3px)' },
                  },
                  '& .avatar-glow': {
                    opacity: selectedDay === day.id ? 1 : 0.6,
                    transform: { xs: 'scale(1.05)', sm: 'scale(1.08)', md: 'scale(1.1)' },
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
                  gap: { xs: 0.5, sm: 1, md: 1.5 },
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: selectedDay === day.id ? 'primary.main' : 'text.secondary',
                    fontWeight: selectedDay === day.id ? 800 : 600,
                    fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    textShadow: selectedDay === day.id ? '0 2px 4px rgba(108, 92, 231, 0.3)' : 'none',
                    textAlign: 'center',
                    lineHeight: 1,
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
                      inset: { xs: -4, sm: -5, md: -6 },
                      borderRadius: '50%',
                      background: selectedDay === day.id 
                        ? 'linear-gradient(45deg, #6c5ce7, #a29bfe, #fd79a8)'
                        : 'linear-gradient(45deg, rgba(108, 92, 231, 0.3), rgba(162, 155, 254, 0.3))',
                      opacity: selectedDay === day.id ? 0.8 : 0,
                      filter: { xs: 'blur(8px)', sm: 'blur(10px)', md: 'blur(12px)' },
                      transition: 'all 0.4s ease',
                      zIndex: -1,
                    }}
                  />
                  
                  <Avatar
                    sx={{
                      width: { xs: 48, sm: 56, md: 72 },
                      height: { xs: 48, sm: 56, md: 72 },
                      bgcolor: selectedDay === day.id ? 'primary.main' : 'background.paper',
                      border: selectedDay === day.id 
                        ? { xs: '2px solid rgba(255,255,255,0.8)', sm: '2.5px solid rgba(255,255,255,0.8)', md: '3px solid rgba(255,255,255,0.8)' }
                        : { xs: '2px solid rgba(108, 92, 231, 0.25)', sm: '2.5px solid rgba(108, 92, 231, 0.25)', md: '3px solid rgba(108, 92, 231, 0.25)' },
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                      boxShadow: selectedDay === day.id 
                        ? { 
                            xs: '0 6px 20px rgba(108, 92, 231, 0.4), 0 3px 10px rgba(108, 92, 231, 0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
                            sm: '0 8px 30px rgba(108, 92, 231, 0.4), 0 4px 15px rgba(108, 92, 231, 0.3), inset 0 1.5px 0 rgba(255,255,255,0.4)',
                            md: '0 12px 40px rgba(108, 92, 231, 0.4), 0 6px 20px rgba(108, 92, 231, 0.3), inset 0 2px 0 rgba(255,255,255,0.4)'
                          }
                        : { 
                            xs: '0 3px 10px rgba(0,0,0,0.12), 0 1.5px 6px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                            sm: '0 4px 15px rgba(0,0,0,0.12), 0 2px 9px rgba(0,0,0,0.08), inset 0 1.5px 0 rgba(255,255,255,0.8)',
                            md: '0 6px 20px rgba(0,0,0,0.12), 0 3px 12px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.8)'
                          },
                      background: selectedDay === day.id 
                        ? 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 50%, #667eea 100%)'
                        : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        background: selectedDay === day.id 
                          ? 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)'
                          : 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
                        pointerEvents: 'none',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                        transform: selectedDay === day.id ? 'rotate(0deg)' : 'rotate(-45deg)',
                        transition: 'transform 0.6s ease-in-out',
                        pointerEvents: 'none',
                        animation: selectedDay === day.id ? 'shimmer 2s ease-in-out infinite' : 'none',
                      },
                      '@keyframes shimmer': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' }
                      }
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
                          <AeroplaneIcon width={48} height={48} color="white" />
                        ) : day.id === 1 ? (
                          <BusinessMeetingIcon width={48} height={48} color="white" />
                        ) : day.id === 2 ? (
                          <TruckIcon width={24} height={18} color="white" />
                        ) : day.id === 3 ? (
                          <LeadershipIcon width={48} height={47} color="white" />
                        ) : day.id === 4 ? (
                          <DepartureIcon width={48} height={48} color="white" />
                        ) : (
                          <TruckIcon width={24} height={18} color="white" />
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        animate={{ 
                          scale: [1, 1.02, 1],
                          rotate: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: 8,
                          transition: { duration: 0.3, type: "spring", stiffness: 400 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {day.id === 0 ? (
                          <AeroplaneIcon width={48} height={48} color="#6F25D2" />
                        ) : day.id === 1 ? (
                          <BusinessMeetingIcon width={48} height={48} color="#6F25D2" />
                        ) : day.id === 2 ? (
                          <TruckIcon width={24} height={18} color="#6F25D2" />
                        ) : day.id === 3 ? (
                          <LeadershipIcon width={48} height={47} color="#6F25D2" />
                        ) : day.id === 4 ? (
                          <DepartureIcon width={48} height={48} color="#6F25D2" />
                        ) : (
                          <TruckIcon width={24} height={18} color="#6c757d" />
                        )}
                      </motion.div>
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
                          bottom: { xs: -6, sm: -7, md: -8 },
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: { xs: 8, sm: 10, md: 12 },
                          height: { xs: 8, sm: 10, md: 12 },
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
                          boxShadow: { 
                            xs: '0 2px 6px rgba(108, 92, 231, 0.6), 0 1px 3px rgba(108, 92, 231, 0.4)',
                            sm: '0 3px 9px rgba(108, 92, 231, 0.6), 0 1.5px 4.5px rgba(108, 92, 231, 0.4)',
                            md: '0 4px 12px rgba(108, 92, 231, 0.6), 0 2px 6px rgba(108, 92, 231, 0.4)'
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: { xs: 1.5, sm: 2, md: 2 },
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
                    fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    textShadow: selectedDay === day.id ? '0 2px 4px rgba(108, 92, 231, 0.3)' : 'none',
                    textAlign: 'center',
                    lineHeight: 1,
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
