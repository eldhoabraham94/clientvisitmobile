import React from 'react';
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
import TruckIcon from './TruckIcon';
import AirplaneIcon from './AirplaneIcon';
import Day2Icon from './Day2Icon';
import Day3Icon from './Day3Icon';
import Day4Icon from './Day4Icon';
import Day5Icon from './Day5Icon';

const EventsView = ({ dayData, dayInfo }) => {
  if (!dayData) return null;

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
        {dayData.events.map((event, index) => (
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
              sx={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                },
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: 'text.primary',
                      fontSize: '1rem'
                    }}
                  >
                    {event.title}
                  </Typography>
                  <MoreIcon sx={{ color: 'text.secondary', cursor: 'pointer', fontSize: 20 }} />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.primary',
                      fontWeight: 500,
                      fontSize: '0.85rem'
                    }}
                  >
                    {event.time}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <LocationIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  <Typography 
                    variant="body2" 
                    sx={{ color: 'text.secondary', fontSize: '0.8rem' }}
                  >
                    {event.location}
                  </Typography>
                </Box>

                {/* Progress Bar Section - With Moving Truck Icon */}
                <Box sx={{ mb: 1.5 }}>
                  <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '16px' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                      style={{ flex: 1, position: 'relative' }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={event.progress}
                        sx={{
                          height: 12,
                          borderRadius: 6,
                          backgroundColor: '#e8eaf6',
                          position: 'relative',
                          overflow: 'hidden',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 6,
                            background: 'linear-gradient(90deg, #22BDF2 0%, #1DA7DC 70%, rgba(24, 160, 214, 0.8) 85%, rgba(24, 160, 214, 0.4) 95%, transparent 100%)',
                            transition: 'transform 1.2s ease-in-out',
                            boxShadow: '0 2px 8px rgba(34, 189, 242, 0.3)',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              right: 0,
                              width: '20px',
                              height: '100%',
                              background: 'linear-gradient(90deg, rgba(34, 189, 242, 0.6) 0%, rgba(34, 189, 242, 0.3) 50%, transparent 100%)',
                              pointerEvents: 'none',
                            }
                          },
                        }}
                      />
                      
                      {/* Moving Truck Icon - Tires touching the track */}
                      <motion.div
                        initial={{ left: '4%' }}
                        animate={{ left: `${Math.min(92, Math.max(4, event.progress))}%` }}
                        transition={{ 
                          duration: 2.0, 
                          delay: index * 0.1 + 0.8,
                          type: "spring",
                          stiffness: 80,
                          damping: 25
                        }}
                        style={{
                          position: 'absolute',
                          top: '-24px',
                          transform: 'translateX(-50%)',
                          zIndex: 2,
                          pointerEvents: 'none',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                        }}
                      >
                        <TruckIcon width={32} height={24} color="#22BDF2" />
                      </motion.div>
                    </motion.div>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Chip
                    label={getStatusText(event.status)}
                    color={getStatusColor(event.status)}
                    size="small"
                    sx={{ 
                      fontSize: '0.7rem',
                      height: 22,
                      fontWeight: 500
                    }}
                  />

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <PeopleIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: '0.75rem',
                        fontWeight: 500
                      }}
                    >
                      {event.attendees} Attendees
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default EventsView;
