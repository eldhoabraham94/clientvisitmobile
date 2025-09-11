import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  LinearProgress,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  People as PeopleIcon,
  MoreHoriz as MoreIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import TruckIcon from './TruckIcon.jsx';
import AirplaneIcon from './AirplaneIcon.jsx';
import Day2Icon from './Day2Icon.jsx';
import Day3Icon from './Day3Icon.jsx';
import Day4Icon from './Day4Icon.jsx';
import Day5Icon from './Day5Icon.jsx';
import SessionDetailPopup from './SessionDetailPopup.jsx';

const EventsView = ({ dayData, dayInfo }) => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  if (!dayData) return null;

  const handleSessionClick = (event) => {
    setSelectedSession(event);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setSelectedSession(null);
  };

  // Function to calculate progress based on current time
  const calculateTimeBasedProgress = (event) => {
    // Simulate current time as 12:00 PM on the third day (September 9th)
    const simulatedTime = 12 * 60; // 12:00 PM in minutes since midnight
    const currentTime = simulatedTime;
    
    // Parse start and end times
    const [startHour, startMin] = event.startTime.split(':').map(Number);
    const [endHour, endMin] = event.endTime.split(':').map(Number);
    
    const startTimeMinutes = startHour * 60 + startMin;
    const endTimeMinutes = endHour * 60 + endMin;
    
    // If current time is before start time, progress is 0
    if (currentTime < startTimeMinutes) {
      return 0;
    }
    
    // If current time is after end time, progress is 100
    if (currentTime > endTimeMinutes) {
      return 100;
    }
    
    // Calculate progress percentage based on elapsed time
    const totalDuration = endTimeMinutes - startTimeMinutes;
    const elapsedTime = currentTime - startTimeMinutes;
    const progressPercentage = Math.round((elapsedTime / totalDuration) * 100);
    
    return Math.max(0, Math.min(100, progressPercentage));
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'progress':
        return 'primary';
      case 'completed':
        return 'success';
      case 'scheduled':
        return 'default';
      default:
        return 'default';
    }
  };

  const getProgressColor = (progress, status) => {
    if (status.toLowerCase() === 'completed') return 'success';
    if (status.toLowerCase() === 'progress') return 'primary';
    return 'inherit';
  };

  const getStatusText = (status) => {
    switch (status.toLowerCase()) {
      case 'progress':
        return 'Progress';
      case 'completed':
        return 'Completed';
      case 'scheduled':
        return 'Scheduled';
      default:
        return status;
    }
  };

  return (
    <Box>
      {/* Day Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            mb: 3,
            background: '#ffffff',
            color: '#2d3436',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <CardContent sx={{ py: 2, px: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Truck Illustration */}
            <Box
              sx={{
                position: 'relative',
                minWidth: 120,
                height: 70,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Truck/Airplane Illustration */}
              <Box
                sx={{
                  width: 110,
                  height: 60,
                  borderRadius: 2,
                  bgcolor: 'rgba(34, 189, 242, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {dayInfo.id === 0 ? (
                  <AirplaneIcon width={85} height={32} />
                ) : dayInfo.id === 1 ? (
                  <Day2Icon width={110} height={55} />
                ) : dayInfo.id === 2 ? (
                  <Day3Icon width={104} height={47} />
                ) : dayInfo.id === 3 ? (
                  <Day4Icon width={103} height={47} />
                ) : dayInfo.id === 4 ? (
                  <Day5Icon width={124} height={48} />
                ) : (
                  <TruckIcon width={60} height={45} color="#22BDF2" />
                )}
              </Box>
              
              {/* Location Pin */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -8,
                  right: 8,
                  width: 16,
                  height: 16,
                  borderRadius: '50% 50% 50% 0',
                  bgcolor: '#ff6b6b',
                  transform: 'rotate(-45deg)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'white',
                  }
                }}
              />
            </Box>
            
            {/* Content */}
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.7, 
                  mb: 0.5,
                  fontSize: '1rem',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  color: '#8B5CF6'
                }}
              >
                DAY {dayInfo.id + 1}
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  fontSize: '1.5rem',
                  lineHeight: 1.2,
                  color: '#2d3436'
                }}
              >
                {dayData.title}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </motion.div>

      {/* Events List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {dayData.events.map((event, index) => {
          const timeBasedProgress = calculateTimeBasedProgress(event);
          
          return (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.1 + 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card
              onClick={() => handleSessionClick(event)}
              sx={{
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid rgba(34, 189, 242, 0.1)',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.1)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #22BDF2 0%, #8B5CF6 50%, #22BDF2 100%)',
                  opacity: 0.7,
                },
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 40px rgba(34, 189, 242, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(34, 189, 242, 0.2)',
                  '&::before': {
                    opacity: 1,
                    background: 'linear-gradient(90deg, #22BDF2 0%, #8B5CF6 30%, #22BDF2 70%, #8B5CF6 100%)',
                  }
                },
              }}
            >
              <CardContent sx={{ 
                p: 3,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: '1.1rem',
                      letterSpacing: '0.3px',
                      textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    }}
                  >
                    {event.title}
                  </Typography>
                  <MoreIcon sx={{ color: 'text.secondary', cursor: 'pointer', fontSize: 20 }} />
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  mb: 1.5,
                  background: 'linear-gradient(90deg, rgba(34, 189, 242, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(34, 189, 242, 0.15)',
                }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      background: 'linear-gradient(135deg, #22BDF2 0%, #8B5CF6 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {event.time}
                  </Typography>
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  mb: 2.5,
                  padding: '6px 0',
                }}>
                  <LocationIcon sx={{ 
                    fontSize: 18, 
                    color: '#22BDF2',
                    filter: 'drop-shadow(0 1px 2px rgba(34, 189, 242, 0.3))',
                  }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#636e72',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      letterSpacing: '0.3px',
                    }}
                  >
                    {event.location}
                  </Typography>
                </Box>

                {/* Enhanced Progress Bar Section - With Moving Truck Icon */}
                <Box sx={{ mb: 1.5 }}>
                  <Box sx={{ 
                    position: 'relative', 
                    display: 'flex', 
                    alignItems: 'center', 
                    paddingTop: '20px',
                    paddingBottom: '8px',
                    paddingX: '4px',
                  }}>
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: '100%', opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      style={{ flex: 1, position: 'relative' }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={timeBasedProgress}
                        sx={{
                          height: 12,
                          borderRadius: 6,
                          backgroundColor: '#E8EAF6',
                          position: 'relative',
                          overflow: 'hidden',
                          boxShadow: 'none',
                          border: 'none',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 6,
                            backgroundColor: '#22BDF2',
                            transition: 'transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                              animation: 'progressShimmer 2s ease-in-out infinite',
                            }
                          },
                          '@keyframes progressShimmer': {
                            '0%': { 
                              transform: 'translateX(-100%)',
                              opacity: 0
                            },
                            '50%': {
                              opacity: 1
                            },
                            '100%': { 
                              transform: 'translateX(100%)',
                              opacity: 0
                            }
                          }
                        }}
                      />
                      
                      {/* Simple Moving Truck Icon */}
                      <motion.div
                        initial={{ left: '4%' }}
                        animate={{ left: `${Math.min(92, Math.max(4, timeBasedProgress))}%` }}
                        transition={{ 
                          duration: 2.0, 
                          delay: index * 0.1 + 0.8,
                          type: "spring",
                          stiffness: 70,
                          damping: 20
                        }}
                        style={{
                          position: 'absolute',
                          top: '-24px',
                          transform: 'translateX(-50%)',
                          zIndex: 3,
                          pointerEvents: 'none',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                        }}
                      >
                        <TruckIcon width={32} height={24} color="#22BDF2" />
                      </motion.div>
                    </motion.div>
                  </Box>
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginTop: '8px',
                  padding: '12px 0 4px 0',
                  borderTop: '1px solid rgba(34, 189, 242, 0.1)',
                }}>
                  <Chip
                    label={getStatusText(event.status)}
                    color={getStatusColor(event.status)}
                    size="small"
                    sx={{ 
                      fontSize: '0.75rem',
                      height: 26,
                      fontWeight: 600,
                      borderRadius: '13px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      letterSpacing: '0.3px',
                      '& .MuiChip-label': {
                        padding: '0 10px',
                      }
                    }}
                  />

                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 0.8,
                    background: 'linear-gradient(90deg, rgba(34, 189, 242, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    border: '1px solid rgba(34, 189, 242, 0.15)',
                  }}>
                    <PeopleIcon sx={{ 
                      fontSize: 16, 
                      color: '#22BDF2',
                      filter: 'drop-shadow(0 1px 2px rgba(34, 189, 242, 0.3))',
                    }} />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        background: 'linear-gradient(135deg, #22BDF2 0%, #8B5CF6 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.3px',
                      }}
                    >
                      {event.attendees} Attendees
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        );
        })}
      </Box>

      {/* Session Detail Popup */}
      <SessionDetailPopup
        open={popupOpen}
        onClose={handleClosePopup}
        sessionData={selectedSession}
        dayInfo={dayInfo}
      />
    </Box>
  );
};

export default EventsView;
