import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  ButtonBase,
} from '@mui/material';
import {
  FlightLand,
  FlightTakeoff,
  Business,
  Groups,
  Handshake,
} from '@mui/icons-material';
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
          borderRadius: { xs: 3, sm: 4, md: 5 },
          border: '3px solid transparent',
          backgroundImage: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 30%, #e3f2fd 100%), linear-gradient(135deg, #00bfff 0%, #00A0D6 25%, #0277bd 50%, #1e3a8a 75%, #1a237e 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'content-box, border-box',
          boxShadow: {
            xs: '0 12px 40px rgba(108, 92, 231, 0.2), 0 8px 24px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.8)',
            sm: '0 16px 48px rgba(108, 92, 231, 0.25), 0 10px 30px rgba(0,0,0,0.12), inset 0 3px 0 rgba(255,255,255,0.9)',
            md: '0 20px 56px rgba(108, 92, 231, 0.3), 0 12px 36px rgba(0,0,0,0.15), inset 0 4px 0 rgba(255,255,255,1)'
          },
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
            borderRadius: { xs: 3, sm: 4, md: 5 },
            padding: 3,
            background: 'linear-gradient(145deg, rgba(0, 191, 255, 0.15), rgba(0, 160, 214, 0.2), rgba(2, 119, 189, 0.2), rgba(30, 58, 138, 0.15))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'exclude',
            maskComposite: 'exclude',
            opacity: 0.8,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: { xs: '5%', sm: '8%', md: '10%' },
            right: { xs: '5%', sm: '8%', md: '10%' },
            height: { xs: '4px', sm: '5px', md: '6px' },
            background: 'linear-gradient(90deg, rgba(0, 160, 214, 0.5) 0%, rgba(2, 119, 189, 0.8) 25%, rgba(0, 93, 146, 0.6) 50%, rgba(2, 119, 189, 0.8) 75%, rgba(0, 160, 214, 0.5) 100%)',
            borderRadius: { xs: '3px', sm: '4px', md: '5px' },
            transform: 'translateY(-50%)',
            zIndex: 0,
            boxShadow: {
              xs: '0 2px 8px rgba(0, 160, 214, 0.3)',
              sm: '0 3px 12px rgba(0, 160, 214, 0.4)',
              md: '0 4px 16px rgba(0, 160, 214, 0.5)'
            },
            animation: 'shimmer 3s ease-in-out infinite',
            '@keyframes shimmer': {
              '0%, 100%': { opacity: 0.6 },
              '50%': { opacity: 1 }
            }
          }
        }}
      >
        {days.map((day, index) => (
          <motion.div
            key={day.id}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ zIndex: 1 }}
          >
            <ButtonBase
              onClick={() => onDaySelect(day.id)}
              sx={{
                borderRadius: { xs: 3, sm: 4, md: 5 },
                p: { xs: 1, sm: 1.5, md: 2 },
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
                    color: selectedDay === day.id ? '#005d92' : 'text.secondary',
                    fontWeight: selectedDay === day.id ? 800 : 600,
                    fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    textShadow: selectedDay === day.id ? '0 2px 4px rgba(0, 93, 146, 0.3)' : 'none',
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
                        ? 'linear-gradient(45deg, #00A0D6, #0277bd, #005d92)'
                        : 'linear-gradient(45deg, rgba(0, 160, 214, 0.3), rgba(2, 119, 189, 0.3))',
                      opacity: selectedDay === day.id ? 0.8 : 0,
                      filter: { xs: 'blur(8px)', sm: 'blur(10px)', md: 'blur(12px)' },
                      transition: 'all 0.4s ease',
                      zIndex: -1,
                    }}
                  />
                  
                  <Avatar
                    sx={{
                      width: { xs: 40, sm: 48, md: 60 },
                      height: { xs: 40, sm: 48, md: 60 },
                      bgcolor: selectedDay === day.id ? '#005d92' : 'background.paper',
                      border: selectedDay === day.id 
                        ? { xs: '3px solid rgba(255,255,255,0.9)', sm: '4px solid rgba(255,255,255,0.9)', md: '5px solid rgba(255,255,255,0.9)' }
                        : { xs: '3px solid rgba(0, 160, 214, 0.4)', sm: '4px solid rgba(0, 160, 214, 0.4)', md: '5px solid rgba(0, 160, 214, 0.4)' },
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                      boxShadow: selectedDay === day.id 
                        ? { 
                            xs: '0 8px 25px rgba(0, 160, 214, 0.5), 0 4px 15px rgba(0, 160, 214, 0.4), inset 0 2px 0 rgba(255,255,255,0.6)',
                            sm: '0 10px 35px rgba(0, 160, 214, 0.5), 0 6px 20px rgba(0, 160, 214, 0.4), inset 0 3px 0 rgba(255,255,255,0.6)',
                            md: '0 15px 45px rgba(0, 160, 214, 0.5), 0 8px 25px rgba(0, 160, 214, 0.4), inset 0 4px 0 rgba(255,255,255,0.6)'
                          }
                        : { 
                            xs: '0 4px 15px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.9)',
                            sm: '0 6px 20px rgba(0,0,0,0.15), 0 3px 12px rgba(0,0,0,0.1), inset 0 3px 0 rgba(255,255,255,0.9)',
                            md: '0 8px 25px rgba(0,0,0,0.15), 0 4px 15px rgba(0,0,0,0.1), inset 0 4px 0 rgba(255,255,255,0.9)'
                          },
                      background: selectedDay === day.id 
                        ? 'linear-gradient(135deg, #00A0D6 0%, #0277bd 50%, #005d92 100%)'
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
                        opacity: selectedDay === day.id ? 1 : 0,
                        transition: 'opacity 0.6s ease-in-out',
                        pointerEvents: 'none',
                        animation: selectedDay === day.id ? 'glow 2s ease-in-out infinite' : 'none',
                      },
                      '@keyframes glow': {
                        '0%, 100%': { opacity: 0.6 },
                        '50%': { opacity: 1 }
                      }
                    }}
                  >
                    {selectedDay === day.id ? (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 25,
                          delay: 0.1 
                        }}
                      >
                        {day.id === 0 ? (
                          <FlightLand sx={{ fontSize: 28, color: "white" }} />
                        ) : day.id === 1 ? (
                          <Business sx={{ fontSize: 28, color: "white" }} />
                        ) : day.id === 2 ? (
                          <Groups sx={{ fontSize: 28, color: "white" }} />
                        ) : day.id === 3 ? (
                          <Handshake sx={{ fontSize: 28, color: "white" }} />
                        ) : day.id === 4 ? (
                          <FlightTakeoff sx={{ fontSize: 28, color: "white" }} />
                        ) : (
                          <TruckIcon width={16} height={12} color="white" />
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        animate={{ 
                          scale: [1, 1.02, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -2,
                          transition: { duration: 0.3, type: "spring", stiffness: 400 }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {day.id === 0 ? (
                          <FlightLand sx={{ fontSize: 28, color: "#005d92" }} />
                        ) : day.id === 1 ? (
                          <Business sx={{ fontSize: 28, color: "#005d92" }} />
                        ) : day.id === 2 ? (
                          <Groups sx={{ fontSize: 28, color: "#005d92" }} />
                        ) : day.id === 3 ? (
                          <Handshake sx={{ fontSize: 28, color: "#005d92" }} />
                        ) : day.id === 4 ? (
                          <FlightTakeoff sx={{ fontSize: 28, color: "#005d92" }} />
                        ) : (
                          <TruckIcon width={16} height={12} color="#005d92" />
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
                          background: 'linear-gradient(135deg, #00A0D6 0%, #0277bd 100%)',
                          boxShadow: { 
                            xs: '0 2px 6px rgba(0, 160, 214, 0.6), 0 1px 3px rgba(0, 160, 214, 0.4)',
                            sm: '0 3px 9px rgba(0, 160, 214, 0.6), 0 1.5px 4.5px rgba(0, 160, 214, 0.4)',
                            md: '0 4px 12px rgba(0, 160, 214, 0.6), 0 2px 6px rgba(0, 160, 214, 0.4)'
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
                    color: selectedDay === day.id ? '#005d92' : 'text.secondary',
                    fontWeight: selectedDay === day.id ? 800 : 600,
                    fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    textShadow: selectedDay === day.id ? '0 2px 4px rgba(0, 93, 146, 0.3)' : 'none',
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
