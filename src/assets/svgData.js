const regions = [
  {
    regionName: 'Dolnoslaskie',
    d: "m 52.276011,352.46195 2.36,0.07 0.29,-2.89 3.6,-0.4 0.81,-2.95 5.95,-3.59 8.96,5.37 0.66,-5.96 2.23,0.06 -0.66,-3.08 1.68,-2.79 5.32,1.61 0.33,-1.34 6.37,5.62 0.42,2.27 6.84,-6.97 0.26,-3.5 6.409999,-1.97 2.07,-8.32 -2.23,-1.11 2.96,-2.13 0.13,-2.99 6.71,-2.31 -0.76,-2.31 2.48,-0.73 -2.53,-1.2 1.22,-1.55 2.67,0.08 0.36,2.13 5.87,2.22 2.69,-0.54 -0.96,5.24 3.32,-0.21 3.49,5.01 5.85,-5.43 0.62,-3.94 2.56,-2.63 0,0 7.73,0.08 4.86,3.32 2.2,4.22 -1.49,4.67 7.83,1.25 1.9,4.56 10.1,5.38 5.92,-0.05 0.27,-2.03 2.64,-0.87 5.91,0.79 0.68,-6.08 5.02,-1.64 10.41,1.97 5.35,4.14 0,0 0,0.8 0,0 1.44,3.67 -4.13,3.22 2.18,9.91 11.94,-1.04 -1.79,6.74 2.22,1.2 -0.2,8.44 3.25,5.27 0,0 -8,3.01 -3.76,-2.77 -0.6,2.09 -3.19,1.38 2.15,6.94 -3.75,2.19 -0.28,4.57 1.61,2.08 -3.09,0.28 1.34,1.64 -5.02,0.39 -0.22,5.53 -3.59,-1.48 -0.97,2.42 2.74,1.09 -0.8,2.64 -3.4,1.14 1.16,6.23 -3.82,-0.98 -1.87,2.24 2.32,2.52 -4.26,3.04 2.21,2.27 -1.4,0.85 0.59,5.94 -7.62,1.15 -3.49,6.22 -0.78,7.23 -6.06,-1.5 0,0 -0.28,0.19 0,0 -2.18,3.2 0,0 -3.14,3.82 3.09,1.75 2.31,7.05 3.41,1.25 1.51,6.94 -1.77,1.23 -1.37,-2.71 -1.31,2.13 -3.41,-0.07 -1,2.22 -2.29,-0.67 -3.75,5.85 -5.71,4.4 -6.63,-4.2 -1.45,-7.41 -7.49,-9.49 -3.22,-0.75 -1.35,-4.81 -3.44,-0.33 -1.54,1.51 -5.1,-6.22 7.11,-7.13 2.92,0.49 2.44,-2.56 0.23,-3.88 2.43,-0.97 -6.22,-8 -6.61,-0.88 -0.97,3.55 -1.92,0.65 -5.15,-3.4 -4.76,6.18 -2.31,-1.41 2.15,-1.6 -1.93,-5.2 -7.87,0.94 -2.8,-7.76 -6.689999,1.75 -6.18,-3.78 -4.9,-0.12 -5.22,-2.92 -3.95,2.95 -0.42,-5.63 -5.48,-5.21 -0.17,-8.62 -2.19,-1.9 -4.1,1.22 -0.14,-3.26 -2.42,2.89 -4.16,-3.17 -4.64,1.15 -1.03,1.98 3.27,2.25 -1.98,4.27 0.75,5.41 -10.88,-0.4 8.56,-17.45 4.6,-18.8 -0.3,-4.7 z",
    mapTextOffset_X: "130",
    mapTextOffset_Y: "380",
    isHoverd: false,
  },
  {
    regionName: 'Kujawsko-Pomorskie',
    d: "m 199.87601,140.08195 1.83,-9.57 5.46,-4.05 0.85,3.64 3.03,0.68 2.05,-1.87 3.9,2.64 -0.92,-2.94 3.92,-0.19 -1.01,-2.98 2.33,-5.97 4.47,0.44 4.5,-2.56 -1.95,-5.15 5.3,0.52 3.58,3.4 4.24,-6.08 2.35,2.49 2.43,-0.85 1.08,2.42 1.93,-1.27 0,0 0,1.09 0,0 4.17,0.14 -0.25,4.37 11.97,1.53 0.72,-1.66 2.74,-0.19 -0.25,2.46 2.4,2.61 1.91,-0.44 -0.5,-1.86 3.18,0.39 1.55,-2.22 4.72,1.15 2.33,-1.62 -1.82,5.83 1.84,3.84 8.36,1.09 -0.17,1.82 5.48,-1.92 9.22,1.2 0,0 3.42,1.53 0.28,5.8 4.19,10.88 1.9,1.37 0.83,-2.1 4.3,-0.39 3.84,3.26 -0.16,1.82 3.93,-0.77 1.43,3.71 9.13,-0.77 2.7,7.66 -2.77,1.38 0.29,2.41 3.16,0.74 0.09,2.4 0,0 -0.32,0 0,0 1.48,5.21 0,0 -4.22,3.12 0,0 -0.45,-0.15 0,0 -1.11,1.69 -1.89,-0.54 1.07,7.46 2.27,1.7 -1.61,3.42 1.01,3.19 -7.65,-3.48 1.35,3.04 -2.97,2.43 -5.12,-0.99 4.13,8.54 -2.49,-0.21 -2.91,4.85 4.89,4.66 -0.46,2.02 1.61,-0.07 -1.48,1.76 1.61,2.67 -5.15,-1.79 0.58,5.09 -2.17,0.17 -2.86,4.6 3.21,2.54 -3.48,3.17 0,0 -0.81,0.01 0,0 -0.04,4.17 -1.7,-0.24 4.41,1.75 -4.7,6.35 -3.15,0.02 1.51,1.72 0,0 0.35,0.57 0,0 -0.36,2.69 0,0 -4.88,3.23 0.63,2.24 -1.23,-1.7 -9.39,2.67 0,0 -4.71,-2.34 0.38,-1.91 -3.27,-2.46 -0.58,3.36 -9.64,3.32 -2.37,-6.42 -2.19,-0.22 0.22,-2.84 -1.61,0.63 -0.5,-2.83 -3.43,-1.75 -1.99,0.55 -2.27,-3.59 -2.02,-0.55 -1.61,2.8 -4.62,0.62 -1.24,-7.26 -6.52,6.11 -3.45,-0.19 -0.49,-2.18 -6.33,-1.47 0.19,-3.36 -6.57,0.94 0.48,-3.47 -1.32,1.09 -1.97,-2.95 -1.19,1.01 -2.85,-5.62 -2.3,0.55 -2.78,-2.16 -1.38,2.32 -0.41,-2.3 -5.16,5.62 0.17,-4.76 -3.14,-0.43 0.09,-5.63 -3.23,0.43 -3.4,3.25 -3.18,-0.86 0.96,-4.72 -5.05,-2.8 0.33,-2.92 5.78,-0.32 0.9,-14.06 -7.48,-5.57 -4.81,0.91 -0.9,-2.18 1.48,-2.16 0,0 0.3,-0.06 0,0 -0.44,-5.92 2.35,-1.44 -0.65,-3.96 2.39,-1.2 -3.22,-1.31 0.64,-4.69 -1.64,-1.48 5.51,-1.26 1.48,-4.09 -6.04,-8.07 -3.49,-1.17 -0.9,1.44 -1.19,-3.46 z",
    mapTextOffset_X: "270",
    mapTextOffset_Y: "190",
    isHoverd: false,
  },
  {
    regionName: 'Łódzkie',
    d: "m 315.78601,250.51195 3.94,4.72 6.65,-0.82 2.87,1.52 -0.23,1.81 7.31,2.92 2.55,3.47 2.55,-1.99 2.86,1.32 3.69,-2.05 2.77,0.47 2.56,-3.17 4.13,2.61 0.57,2.52 3.18,-1.22 3.26,3.31 -0.49,4.82 2.26,3.84 3.6,0.15 1.63,2.81 4.61,1.35 -0.76,4.71 -3.43,2.73 3.34,1.72 1.26,2.84 0.3,1.69 -2.92,2.86 4.27,-0.08 0.47,2.42 6.81,-2.88 3.52,2.33 1.09,2.92 3.7,0.19 3.22,7.31 -3.81,0.33 1.45,0.7 0.12,6.15 4.6,2.23 0.01,2.82 -2.31,3.88 -6.18,-1.32 -3.23,-2.86 -4.62,3.78 2.61,8.5 2.14,1.57 -1.07,5.22 5,-0.89 0.53,2.18 -2.46,6.05 -4.01,4.17 -0.42,3.54 0,0 -0.86,3.01 -2.62,0.97 1.29,3.99 -1.37,3.19 -2.38,-2.01 -1.72,1.63 -2.68,-1.75 -1.09,0.34 1.37,4 -1.44,0.99 -3.7,-0.35 -1.59,1.72 -6.12,-2.44 -2.87,1.24 1.31,3.06 -2.52,2.32 0.1,6.09 4.67,1.46 -1.79,9.23 -4.2,-2.17 -5.25,-6.14 -2.9,7.07 0.88,4.34 0,0 0,0.97 0,0 -0.85,1.4 0,0 -0.09,-0.01 0,0 -1.03,1.08 0,0 -0.47,0.35 0,0 -1.04,0.12 0,0 0.08,0.24 0,0 -2.44,3.36 0,0 -4.57,1.09 -0.37,-3 -4.86,-2.51 -5.58,1.98 -1.1,-5.22 -4.06,-5.92 -1.29,-0.84 -2.4,1.91 -2.43,-2.97 0.52,-2.22 -3.89,1.28 0.41,2.73 -2.69,1.64 -3.63,-2.94 -1.73,0.77 -2.06,-3.24 -2.02,0.58 -7.17,-6.17 -1.98,0.33 -2.18,3.72 -1.56,-1.57 -11.66,2.08 0,0 -5,-2.85 -2.15,-5.46 -1.74,0.23 -1.84,4.53 -1.49,-2.78 -9.74,-1.43 -8.89,-3.93 0,0 1.47,-9.43 -4.28,0.57 -1.86,-8.75 2.76,-0.51 1.08,-2.78 3.43,-0.38 0.77,-2.92 -1.44,-1.97 2.8,-0.79 5.41,3.16 3.35,-5.51 -1.46,-5.68 1.25,-6.02 -1.76,-0.68 2.03,-4.95 -1.71,-0.74 3.53,-4.5 -0.43,-4 1.63,-1.67 -1.16,-2.54 1.89,-1.29 -0.29,-2.15 1.91,0.46 0.19,-3.06 1.84,-0.61 0.76,2.23 4.83,-1.17 5.7,2.14 0.56,-3.98 5.68,-6.71 -4.06,-3.75 -0.82,-9.57 1.92,-1.18 5.19,1.77 0.87,-2.7 5.27,-0.13 1.01,-3.89 -2.17,-2 1.21,-5.72 3.96,-1.58 5.84,1.63 -1.06,-2.12 2.03,-1.37 -0.29,-2.44 -4.26,-0.55 0.99,-6.05 0,0 9.39,-2.67 1.23,1.7 -0.63,-2.24 z",
    mapTextOffset_X: "320",
    mapTextOffset_Y: "330",
    isHoverd: false,
  },
  {
    regionName: 'Lubelskie',
    d: "m 550.36601,261.67195 2.86,0.17 0,0 1.46,0.79 0.1,4.9 11.53,2.55 1.83,2.78 4.67,-0.67 -0.83,2.65 3.72,4.2 3.05,-0.69 3.27,3.66 -0.6,2.22 2.81,6.59 -3.78,4.21 1.15,1.57 -2.02,1.61 1.59,2.39 -0.48,2.01 -1.46,-0.42 -0.28,3.52 2.34,3.97 -6.83,7 1.89,2.99 -1.29,5.36 1.69,10.73 2.69,0.57 0.69,3.1 2.62,0.78 -0.8,4.2 3.23,2.6 -1.08,4.96 -2.89,3.47 0.55,4.01 3.12,0 2.6,7.58 7.99,6.12 -0.77,4.96 3.17,2.5 1.55,5.73 -1.32,0.41 2.65,1.97 0.85,3.76 5.06,5.73 5.67,2.24 -2.44,2.8 -6.26,-0.16 -2.53,2.62 0.37,3.75 3.37,0.92 -0.35,4.04 3.31,0.34 -0.51,3.97 2.02,4.11 -0.36,7.12 -3.51,11.18 -2.23,3.25 -16.49,2.25 -2.61,5.42 -8.72,7.86 0,0 -2.14,-1.19 0.63,-3.27 -6.87,-0.81 1.7,-4.27 0,0 -0.44,0 0,0 -2.96,-2.01 0.55,-3.51 -1.74,-0.54 -6.57,5.05 -4.19,-3.61 -9.98,10.38 -25.03,-1.99 0.03,-1.87 4.7,-2.6 -11,1.12 -4.15,-5.32 -2.23,0.38 0.64,-2.6 2.89,-1.11 -0.83,-2.59 6.08,0.83 2.6,-2.46 -3.85,-0.46 3.04,-1.03 -0.38,-1.39 -2.82,0.12 0.53,-6.62 -3.37,-1.46 -2.94,0.98 -4.24,-3.72 -5.5,-0.48 -2.96,-4.18 -4.26,-0.19 4.14,-8.58 -2.28,-4.17 -6.41,-1.89 -3.31,3.39 -6.7,1.1 -2.6,-3.2 0,0 -1.59,-2.93 -2.16,-21.93 0,0 -0.84,-5.52 1.62,-3.1 -1.88,-3.9 3.15,-9.16 -2.81,-0.34 1.8,-0.82 1.71,-5.09 -1.21,-2.6 -1.58,0.57 -2.84,-2.46 2.6,-2.61 2.24,1.01 2.03,-5.63 -3.28,-8.78 -6.52,0.12 -5.83,-5.35 1.89,-4.09 6.24,4.7 0.69,-2.84 5.16,-0.55 -0.02,-2.62 3.69,-2.19 0.3,-2.08 -3.7,-3.64 6.85,-4.6 -1.96,-4.03 -3.96,1.16 -0.82,-1.91 3.63,-4.06 -1.95,-5.24 0.82,-3.95 9.16,-5.33 5.32,2.11 1.53,-2.48 6.89,1.67 2.83,-2.8 2.04,3.39 4.59,-0.7 4.63,-4.85 7.61,5.78 2.84,-4.66 -1.28,-2.71 3.45,-3.3 5.93,4.43 2.38,-1.31 4.06,1.64 0.44,-4.1 3.4,-0.03 -1.57,-2.93 3.03,-3.41 5.4,0.38 -2.64,-4.26 z",
    mapTextOffset_X: "530",
    mapTextOffset_Y: "360",
    isHoverd: false,
  },
  {
    regionName: 'Lubuskie',
    d: "m 29.506011,229.60195 -0.07,-3.59 2.09,-1.77 4.71,2.56 2.27,-1.43 3.25,-11.53 3.98,-3.2 -0.79,-3.01 3.89,-1.21 -2.05,-1.91 2.03,-2.75 5.28,4.37 2.56,-1.8 2.21,2.53 14.95,-6.38 -2.16,-6.48 4.55,1.01 3.33,-3.79 8.18,-2.82 5.7,3.18 2.63,-2.22 2.41,1.22 2.289999,-1.28 -0.979999,-2.08 3.249999,-1.31 -1.68,-2.15 2.51,-0.51 -0.53,-1.96 3.09,-1.37 -0.42,-2.36 8.12,1.94 -1.5,6.34 0,0 -0.6,4.16 0,0 0,0.34 0,0 0.47,3.08 0,0 0.17,0.12 0,0 0.79,10.74 -4.27,2.06 -0.82,2.47 2.6,1.13 0.64,7.19 -8.67,2.02 1.16,3.4 -2.25,6.75 4.27,6.14 -1.43,2.48 3.21,3.2 1.03,4.35 -3.1,1.99 -1.39,-2.71 -0.78,1.75 5.55,4.78 -2.96,12.84 1.53,11.54 -1.85,3.41 4.27,4.48 1.28,-1.71 2.25,1.04 0.53,2.27 -1.83,2.56 3.65,4.84 6.41,-1.85 0.88,6.68 -2.21,3.12 3.68,0.2 2.39,2.16 2.75,-3.51 3,0.8 5.46,4.6 2.21,6.55 0,0 -2.56,2.63 -0.62,3.94 -5.85,5.43 -3.49,-5.01 -3.32,0.21 0.96,-5.24 -2.69,0.54 -5.87,-2.22 -0.36,-2.13 -2.67,-0.08 -1.22,1.55 2.53,1.2 -2.48,0.73 0.76,2.31 -6.71,2.31 -0.13,2.99 -2.96,2.13 2.23,1.11 -2.07,8.32 -6.409999,1.97 -0.26,3.5 -6.84,6.97 -0.42,-2.27 -6.37,-5.62 -0.33,1.34 -5.32,-1.61 -1.68,2.79 0.66,3.08 -2.23,-0.06 -0.66,5.96 -8.96,-5.37 -5.95,3.59 -0.81,2.95 -3.6,0.4 -0.29,2.89 -2.36,-0.07 0,0 -1.36,-10.33 -13.52,-5.97 -1.12,-3.07 3.26,-4.4 -0.46,-5.18 -5.39,-6.45 -1.4,-6.86 -3.35,-2.52 1.16,-3.39 5.16,-4.55 1.18,-10.01 2.73,-6.1 -4.72,-5.15 1.96,-11.94 -7.41,-3.73 -3.55,-12.06 0.91,-3.83 5.26,-6.14 -1.91,-3.88 2.08,-3.85 z",
    mapTextOffset_X: "60",
    mapTextOffset_Y: "270",
    isHoverd: false,
  },
  {
    regionName: 'Małopolskie',
    d: "m 356.06601,435.48195 2.32,-1.39 17.38,4.79 0.03,3.39 4.08,6.48 -2.68,1.19 0.18,2.55 4.23,3.07 -1.57,2.02 3.45,3.27 -1.37,2.56 2.2,0.26 0.28,1.66 15.9,-1.88 6.83,-7.39 2.82,1.54 3.53,-3.16 10.05,-1.02 4.65,-3.64 2.57,2.35 1.98,-2.37 0,0 0.6,3.86 -4.45,5.21 1.88,4.38 -1.48,6.53 1.96,0.55 -1.77,0.41 2.55,0.67 0.59,2.74 -2,0.47 1.23,1.53 -2.31,1.72 2.51,2.64 -2.59,4.18 1.95,5.39 5.76,0.43 0.99,2.02 -0.8,1.56 -3.06,-0.17 -0.17,3.14 -5.62,1.18 1.86,2.34 -0.76,3.61 5.45,0.14 1.11,1.95 3.01,0.42 2.49,5.29 0.73,4.96 -2.6,5.24 2.94,1.87 -0.85,2.37 3.71,4.71 -1.83,0.87 0.45,4.9 0,0 -7.4,-2.54 -4.02,5.46 -5.12,-3.07 -4.42,1.34 3.15,4.25 -3.79,1 -3.13,5.24 -3.72,1.01 -1.58,-2.74 -1.83,0.64 -0.59,-2.54 -1.67,1.25 -2.4,-0.9 0.75,-1.33 -3.07,-1.2 -1.18,-4.26 -5.63,1.41 -1.92,-1.6 -2.54,3.9 -6.37,-3.66 -2.46,-0.15 0.09,1.92 -0.9,-0.98 -1.56,1.51 -1.13,-1.59 -2.31,0.39 -1.22,5.56 -5.7,-0.73 -3.71,4.45 -0.8,-1.05 -3.9,12.69 -8.49,-5.17 -2.57,0.42 -1.82,3.11 -5.13,-0.21 -1.31,-3.36 3.43,-3.97 -1.68,-2.09 -0.28,-10.18 -4.45,2.16 -5.35,-2.04 0.66,-4.6 -3.52,0.23 -3.34,-10.96 -3.18,-1.62 -0.52,-2.16 0,0 0.83,-5.29 -5.96,-2.43 4.61,-4.34 -0.67,-3.22 -7.27,-1.17 -1.98,-7.72 -7.39,0.61 2.21,-7.79 -1.13,-0.97 -2.23,1.42 0,0 -0.65,0 0,0 -1.08,0.04 0,0 -0.75,0 0,0 -2.15,-1.08 1.89,-1.2 -0.23,-3.31 3.47,-5.84 3.88,-0.63 -1.19,-0.87 2.33,-5.28 0,0 0.33,0 0,0 0.28,1.89 1.06,-2.8 4.11,-0.58 1.53,-2.17 -1.32,-1.61 4.43,-1.7 0.68,-2.13 -6.2,-3.1 -1.07,-3.04 3.41,-2.68 7.6,-0.39 0.44,-3 -2.47,-1.87 0,0 0.32,-0.1 0,0 2.51,0.58 -0.5,-2.62 2.08,-1.98 3.86,1.09 3.98,-0.73 3.14,-2.89 8.56,0.53 2.84,-1.39 0.08,-1.89 4.39,-0.14 z",
    mapTextOffset_X: "375",
    mapTextOffset_Y: "500",
    isHoverd: false,
  },
  {
    regionName: 'Mazowieckie',
    d: "m 344.56601,174.58195 5.17,0.78 -0.66,-3.99 5.11,-3.02 0,0 0.28,0.55 0,0 -0.55,3.45 4.17,2.77 7.24,-1.96 2.42,2.23 2.19,-1.07 8.52,1.78 4.34,-2.57 -0.66,-4.69 4.84,-3.75 5.94,2.12 6.32,-2.68 3.76,-6.22 8.07,2.02 1.32,-3.05 3.18,0.23 -0.99,-2.79 1.62,-1.3 3.81,-0.35 3.43,2.92 13.48,-9.88 5.34,1.04 5.13,-2.12 0.3,-2.38 8.99,-1.55 0,0 0.34,1.5 0,0 -0.46,0 0,0 2.6,3.99 -0.82,1.85 3.52,4.22 -1.89,3.64 2.38,-0.38 2.71,2.4 -4.16,-0.07 0,0 0.04,-0.41 0,0 -1.57,3.19 0.96,2.36 -2.06,-0.37 3.87,5.18 -1.13,0.7 2.21,4.43 -0.59,2.79 2.31,2.78 4.51,-0.55 3.63,5.47 4.44,-1.07 0,0 -1.09,1.59 0,0 1.08,1.71 -2.57,-0.71 -1.08,3.62 7.24,4.73 0,0 -0.52,0 0,0 2.29,2.28 -2.12,2.14 2.77,6.37 10.71,-0.79 0.26,-2.86 3.03,0.13 0.5,3.61 1.9,-0.41 -0.86,1.84 -2.85,0.06 2.22,5.9 2.21,-0.21 0.82,2.18 3.28,-2.16 -0.13,-1.62 4.3,0.81 0.56,13.51 -4.29,4.49 3.93,2.74 4.22,6.38 -0.94,3.97 2.54,1.82 -0.68,4.07 2.28,3.01 7.72,0.08 1.39,2.7 1.4,-1.88 5.95,2.54 6.2,-1.18 2.78,3.78 3.07,0.67 0.52,3.99 3.54,-1.63 1.27,1.65 0,0 -5.68,6.55 2.64,4.26 -5.4,-0.38 -3.03,3.41 1.57,2.93 -3.4,0.03 -0.44,4.1 -4.06,-1.64 -2.38,1.31 -5.93,-4.43 -3.45,3.3 1.28,2.71 -2.84,4.66 -7.61,-5.78 -4.63,4.85 -4.59,0.7 -2.04,-3.39 -2.83,2.8 -6.89,-1.67 -1.53,2.48 -5.32,-2.11 -9.16,5.33 -0.82,3.95 1.95,5.24 -3.63,4.06 0.82,1.91 3.96,-1.16 1.96,4.03 -6.85,4.6 3.7,3.64 -0.3,2.08 -3.69,2.19 0.02,2.62 -5.16,0.55 -0.69,2.84 -6.24,-4.7 -1.89,4.09 5.83,5.35 6.52,-0.12 3.28,8.78 -2.03,5.63 -2.24,-1.01 -2.6,2.61 2.84,2.46 1.58,-0.57 1.21,2.6 -1.71,5.09 -1.8,0.82 2.81,0.34 -3.15,9.16 1.88,3.9 -1.62,3.1 0.84,5.52 0,0 -3.19,2.84 -2.82,-0.24 -2,-3.52 -3.88,0.16 1.13,1.08 -5.27,1.57 -2.09,-0.94 0.3,1.95 -3.14,2.39 -4.93,-2.72 -1.9,-4.32 -12.16,0.44 0.67,-4.69 -4.45,-2.44 1.75,-3.16 -2.23,-2.67 -1.48,5.52 -3.68,1.22 -0.81,-2.07 -2.28,2.13 -3.16,-2.51 -0.23,3.47 -2.01,-0.78 -0.07,1.58 -8.5,-4.46 -1.94,2.18 0.71,-4.43 -5.65,-4.89 -3.19,0.98 -0.91,-5.65 -2.62,-1.86 1.31,-2.9 -5.43,-0.84 0,0 0.42,-3.54 4.01,-4.17 2.46,-6.05 -0.53,-2.18 -5,0.89 1.07,-5.22 -2.14,-1.57 -2.61,-8.5 4.62,-3.78 3.23,2.86 6.18,1.32 2.31,-3.88 -0.01,-2.82 -4.6,-2.23 -0.12,-6.15 -1.45,-0.7 3.81,-0.33 -3.22,-7.31 -3.7,-0.19 -1.09,-2.92 -3.52,-2.33 -6.81,2.88 -0.47,-2.42 -4.27,0.08 2.92,-2.86 -0.3,-1.69 -1.26,-2.84 -3.34,-1.72 3.43,-2.73 0.76,-4.71 -4.61,-1.35 -1.63,-2.81 -3.6,-0.15 -2.26,-3.84 0.49,-4.82 -3.26,-3.31 -3.18,1.22 -0.57,-2.52 -4.13,-2.61 -2.56,3.17 -2.77,-0.47 -3.69,2.05 -2.86,-1.32 -2.55,1.99 -2.55,-3.47 -7.31,-2.92 0.23,-1.81 -2.87,-1.52 -6.65,0.82 -3.94,-4.72 0,0 0.36,-2.69 0,0 -0.35,-0.57 0,0 -1.51,-1.72 3.15,-0.02 4.7,-6.35 -4.41,-1.75 1.7,0.24 0.04,-4.17 0,0 0.81,-0.01 0,0 3.48,-3.17 -3.21,-2.54 2.86,-4.6 2.17,-0.17 -0.58,-5.09 5.15,1.79 -1.61,-2.67 1.48,-1.76 -1.61,0.07 0.46,-2.02 -4.89,-4.66 2.91,-4.85 2.49,0.21 -4.13,-8.54 5.12,0.99 2.97,-2.43 -1.35,-3.04 7.65,3.48 -1.01,-3.19 1.61,-3.42 -2.27,-1.7 -1.07,-7.46 1.89,0.54 1.11,-1.69 0,0 0.45,0.15 0,0 z",
    mapTextOffset_X: "420",
    mapTextOffset_Y: "240",
    isHoverd: false,
  },
  {
    regionName: 'Opolskie',
    d: "m 224.86601,369.22195 3.1,1.56 -1.85,5.38 3.97,1.51 16.72,-6.84 0,0 8.89,3.93 9.74,1.43 1.49,2.78 1.84,-4.53 1.74,-0.23 2.15,5.46 5,2.85 0,0 1.83,3.3 -2.43,1.24 0.07,2.92 -2.33,1.66 1.76,3.74 -1.33,5.48 -3.27,2.59 -0.74,3.07 -2.98,0.74 4.31,5.19 -5.64,4.2 2.72,7.49 4.11,1.78 0.3,5.28 -10.44,0.47 2.85,8.15 -6.23,-2.36 0.52,4.23 -1.46,2.03 1.82,2.87 -2.21,3.08 2.93,3.13 -0.74,4.62 1.73,0.27 0.29,2.33 -4.52,-0.98 -7.12,4.12 0.42,1.78 0,0 0.38,-0.03 0,0 -7.82,1.35 -0.66,1.4 -0.56,-1.37 -2.4,0.59 0.66,6.23 -2.38,4.24 0,0 -1.82,2.57 2.44,0.21 0.05,2.96 -2.48,-1.27 -8.25,4.33 -2.53,-3.62 -3.16,-0.9 -3.54,-8.13 -4.17,-0.5 -3.49,-4.56 10.1,-4.5 0.39,-2.82 -2.42,-2 1.67,-4.03 -2.1,-2.04 -1.87,-0.66 0.06,2.57 -4.54,3.3 -7.23,-0.85 -3.38,2.21 -3.29,-2.97 -2.06,1.76 -0.13,-6.07 -4.05,0.83 -5.06,-4.29 0.16,-2.05 -3.68,0.46 -2.04,-2.29 -8.27,-1.27 -3.85,-2.77 0,0 2.18,-3.2 0,0 0.28,-0.19 0,0 6.06,1.5 0.78,-7.23 3.49,-6.22 7.62,-1.15 -0.59,-5.94 1.4,-0.85 -2.21,-2.27 4.26,-3.04 -2.32,-2.52 1.87,-2.24 3.82,0.98 -1.16,-6.23 3.4,-1.14 0.8,-2.64 -2.74,-1.09 0.97,-2.42 3.59,1.48 0.22,-5.53 5.02,-0.39 -1.34,-1.64 3.09,-0.28 -1.61,-2.08 0.28,-4.57 3.75,-2.19 -2.15,-6.94 3.19,-1.38 0.6,-2.09 3.76,2.77 z",
    mapTextOffset_X: "230",
    mapTextOffset_Y: "420",
    isHoverd: false,
  },
  {
    regionName: 'Podkarpackie',
    d: "m 473.17601,406.15195 2.6,3.2 6.7,-1.1 3.31,-3.39 6.41,1.89 2.28,4.17 -4.14,8.58 4.26,0.19 2.96,4.18 5.5,0.48 4.24,3.72 2.94,-0.98 3.37,1.46 -0.53,6.62 2.82,-0.12 0.38,1.39 -3.04,1.03 3.85,0.46 -2.6,2.46 -6.08,-0.83 0.83,2.59 -2.89,1.11 -0.64,2.6 2.23,-0.38 4.15,5.32 11,-1.12 -4.7,2.6 -0.03,1.87 25.03,1.99 9.98,-10.38 4.19,3.61 6.57,-5.05 1.74,0.54 -0.55,3.51 2.96,2.01 0,0 0.44,0 0,0 -1.7,4.27 6.87,0.81 -0.63,3.27 2.14,1.19 0,0 -16.02,13.82 -38.94,54.02 3.49,3.42 2.98,12.33 -0.4,10.64 -1.51,1.59 1.95,1.42 -2.4,3.75 0.7,0.98 2.23,-1.67 -1,2.22 3.05,0.08 2.46,4.27 3.66,1.43 -1.49,2.77 1.48,5.49 -2.6,0.48 -4.7,-4.72 -5.39,1.29 -5.75,-5.31 -5.42,1.01 -4.69,-1.25 -3.34,-4.2 -2.99,0.82 -5.65,-1.62 -0.13,-2.83 -2.1,0.81 -8.6,-3.95 -1.01,-5.81 -4.3,-6.32 -3.61,-0.21 -3.81,-3.82 -2.69,1.17 -0.45,2.25 -4.13,-5.43 -3.83,-0.44 -1.62,-2.89 -9.7,3.21 -4.72,-1.85 0,0 -0.45,-4.9 1.83,-0.87 -3.71,-4.71 0.85,-2.37 -2.94,-1.87 2.6,-5.24 -0.73,-4.96 -2.49,-5.29 -3.01,-0.42 -1.11,-1.95 -5.45,-0.14 0.76,-3.61 -1.86,-2.34 5.62,-1.18 0.17,-3.14 3.06,0.17 0.8,-1.56 -0.99,-2.02 -5.76,-0.43 -1.95,-5.39 2.59,-4.18 -2.51,-2.64 2.31,-1.72 -1.23,-1.53 2,-0.47 -0.59,-2.74 -2.55,-0.67 1.77,-0.41 -1.96,-0.55 1.48,-6.53 -1.88,-4.38 4.45,-5.21 -0.6,-3.86 0,0 0.25,-0.03 0,0 0.5,-0.36 0,0 5.64,-6.07 8.13,-3.3 0.16,-3.32 9.16,-2.47 4.51,-8.66 5.09,-4.19 1.91,1.04 z",
    mapTextOffset_X: "490",
    mapTextOffset_Y: "480",
    isHoverd: false,
  },
  {
    regionName: 'Podlaskie',
    d: "m 534.05601,45.131946 8.8,2.7 -1.01,2.15 4.06,1.89 -1.12,2.89 2.98,1.81 3.27,-1.68 5.5,5.73 6.29,0.99 9.11,10.32 2.54,9.03 -0.2,3.57 -2.62,3.3 2.07,4.23 0.5,9.920004 1.71,1.11 -0.2,8.45 2.03,2.72 4.75,22.82 8.54,25.37 7.17,11.69 -2.78,7.74 4.52,12.33 -1.82,2.12 1.34,22.66 -12.42,10.6 -5.88,0.03 -10.11,5.33 -6.98,8.27 -10.87,18.62 0,0 -2.86,-0.17 0,0 -1.27,-1.65 -3.54,1.63 -0.52,-3.99 -3.07,-0.67 -2.78,-3.78 -6.2,1.18 -5.95,-2.54 -1.4,1.88 -1.39,-2.7 -7.72,-0.08 -2.28,-3.01 0.68,-4.07 -2.54,-1.82 0.94,-3.97 -4.22,-6.38 -3.93,-2.74 4.29,-4.49 -0.56,-13.51 -4.3,-0.81 0.13,1.62 -3.28,2.16 -0.82,-2.18 -2.21,0.21 -2.22,-5.9 2.85,-0.06 0.86,-1.84 -1.9,0.41 -0.5,-3.61 -3.03,-0.13 -0.26,2.86 -10.71,0.79 -2.77,-6.37 2.12,-2.14 -2.29,-2.28 0,0 0.52,0 0,0 -7.24,-4.73 1.08,-3.62 2.57,0.71 -1.08,-1.71 0,0 1.09,-1.59 0,0 -4.44,1.07 -3.63,-5.47 -4.51,0.55 -2.31,-2.78 0.59,-2.79 -2.21,-4.43 1.13,-0.7 -3.87,-5.18 2.06,0.37 -0.96,-2.36 1.57,-3.19 0,0 -0.04,0.41 0,0 4.16,0.07 -2.71,-2.4 -2.38,0.38 1.89,-3.64 -3.52,-4.22 0.82,-1.85 -2.6,-3.99 0,0 0.46,0 0,0 -0.34,-1.5 0,0 0.72,0.04 0,0 4.77,-1.29 10.62,3.56 3.84,-5.19 4.03,-1.33 2.32,2.41 20.1,-16.22 3.92,-2.63 2.94,1.81 -0.56,-3.3 3.24,-0.17 4.3,-3.75 1.36,1.73 1.3,-3.89 1.06,0.7 0,0 0.77,-0.4 0,0 3.69,-2.88 0.91,-5.51 3.87,-4.52 -0.73,-5.080004 -6.94,-11.58 -3.4,-2.14 1.47,-4.4 -2.6,-4.98 -2.75,0.49 -4.66,-5.92 2.64,-4.37 6.48,-2.02 0.96,-1.98 3.66,0.79 4.61,-1.76 1.89,-5.24 -1.14,-2.27 0,0 2.86,-4.42 z",
    mapTextOffset_X: "530",
    mapTextOffset_Y: "160",
    isHoverd: false,
  },
  {
    regionName: 'Pomorskie',
    d: "m 255.10601,0.2519458 22.84,13.6100002 9.27,8.47 -0.74,3.58 -6.45,-9.89 -17.22,-10.7300002 -1.71,6.1700002 4.71,3.71 -0.1,6.56 2.89,-0.88 -0.19,3.28 3.25,6.22 -1.2,1.38 -2.56,-0.86 3.28,1.51 0.32,8.05 3.81,4.16 5.99,0.86 -2.08,0.64 2.63,2.59 9.97,2.94 2.77,-2.08 3.63,2.26 12.67,-0.89 13.08,-3.12 13.69,-6.93 -14.48,8.71 -11.38,3.15 2.12,2.41 0.2,4.05 0,0 3.71,6.59 -4.4,3.62 1.31,2.21 -3.06,8.78 4.45,2.02 -1.14,1.74 1.15,1.85 1.94,-0.94 5.3,2.75 -1.62,3.08 1.48,3.18 11.07,-2.41 -2.99,7.53 0,0 0,0.33 0,0 -4.04,7.100004 1.26,1.07 -1.07,2.95 -2.14,-3.21 -5.66,-1.46 -2.21,1.21 -0.98,6.62 -4.71,5.03 -0.16,5.17 -2.29,0.15 -2.92,3.39 0.45,2.92 0,0 -9.22,-1.2 -5.48,1.93 0.17,-1.83 -8.36,-1.09 -1.84,-3.84 1.82,-5.83 -2.33,1.62 -4.72,-1.14 -1.55,2.21 -3.19,-0.38 0.5,1.85 -1.91,0.44 -2.39,-2.61 0.25,-2.46 -2.75,0.2 -0.71,1.66 -11.98,-1.53 0.25,-4.36 -4.16,-0.14 0,0 0,-1.09 0,0 -1.93,1.28 -1.09,-2.42 -2.43,0.84 -2.34,-2.48 -4.25,6.08 -3.58,-3.4 -5.3,-0.53 1.95,5.15 -4.5,2.56 -4.47,-0.44 -2.33,5.97 1.01,2.99 -3.92,0.18 0.92,2.94 -3.89,-2.65 -2.05,1.88 -3.03,-0.69 -0.85,-3.63 -5.46,4.04 -1.83,9.57 0,0 -3.31,-1.18 0,0 -0.24,-0.09 0,0 -1.78,-2.67 -3.85,-0.56 0,0 -1.32,0.06 0,0 -3.49,0.7 -4.06,-1.63 -2.63,2.55 -3.2,0.02 0.02,-3.3 -3.11,0.58 -3.44,-11.61 0,0 -2.17,-9.18 5.27,-5.36 -4.44,-3.3 0.03,-3.76 1.34,-1.29 4.65,0.73 0.81,-3.420004 -6.46,-3.65 -0.13,-3.64 -2.04,-2.34 -1.54,-0.81 -0.76,2.57 0,0 -0.71,0.06 0,0 -0.35,-4.92 0,0 0.42,-0.51 0,0 1.23,-4.1 -1.89,-2.77 1.32,-1.79 -5.46,-10.1 0.96,-2.11 7.53,-2.85 0.67,-2.34 -3.07,-3.61 -0.48,-4.96 2.7,-0.69 -0.42,-7.69 -1.44,-3.33 -2.93,-1.21 -2.81,-8.19 0,0 10.51,-2.71 8.99,-7.85 13.07,-6.8 42.29,-10.2100002 20.95,-0.59 z",
    mapTextOffset_X: "240",
    mapTextOffset_Y: "80",
    isHoverd: false,
  },
  {
    regionName: 'Śląskie',
    d: "m 277.65601,382.52195 11.66,-2.08 1.56,1.57 2.18,-3.72 1.98,-0.33 7.17,6.17 2.02,-0.58 2.06,3.24 1.73,-0.77 3.63,2.94 2.69,-1.64 -0.41,-2.73 3.89,-1.28 -0.52,2.22 2.43,2.97 2.4,-1.91 1.29,0.84 4.06,5.92 1.1,5.22 5.58,-1.98 4.86,2.51 0.37,3 4.57,-1.09 0,0 5.28,4.07 -0.22,1.44 -2.23,-0.94 -2.68,5.98 -2.89,-0.78 1.43,3.98 7.14,0.81 2.08,1.73 -1.73,1.11 0.16,2.24 4.13,0.63 -0.64,2.97 -3.27,0.17 -4.35,6.3 6.9,1.43 0.7,2.59 2.3,0.74 0,0 1.32,2.84 -4.39,0.14 -0.08,1.89 -2.84,1.39 -8.56,-0.53 -3.14,2.89 -3.98,0.73 -3.86,-1.09 -2.08,1.98 0.5,2.62 -2.51,-0.58 0,0 -0.32,0.1 0,0 2.47,1.87 -0.44,3 -7.6,0.39 -3.41,2.68 1.07,3.04 6.2,3.1 -0.68,2.13 -4.43,1.7 1.32,1.61 -1.53,2.17 -4.11,0.58 -1.06,2.8 -0.28,-1.89 0,0 -0.33,0 0,0 -2.33,5.28 1.19,0.87 -3.88,0.63 -3.47,5.84 0.23,3.31 -1.89,1.2 2.15,1.08 0,0 0.75,0 0,0 1.08,-0.04 0,0 0.65,0 0,0 2.23,-1.42 1.13,0.97 -2.21,7.79 7.39,-0.61 1.98,7.72 7.27,1.17 0.67,3.22 -4.61,4.34 5.96,2.43 -0.83,5.29 0,0 -5.94,4.16 -0.66,2.97 -6.03,0.41 -2.25,7.23 -2.31,1.75 0.37,2.24 -4.41,0.84 -2.9,-1.33 -2.38,2.02 -3.39,0.04 -0.48,-10.14 -8.29,-1.85 1.34,-2.49 -3.15,-11.9 -4,0.07 -2.01,-2.69 -5.1,-1.69 -3.35,-9.92 2.11,-3.17 -2.4,-1.77 0.42,-3.89 -5.1,1.64 -3.61,-3.22 -5.88,-1 1.14,1.34 -2.03,1.84 -2.55,-4.68 -3.82,-0.71 -0.49,-2.47 -3.22,1.49 -2.32,-1.15 -1.63,-4.66 -3.36,-2.07 0,0 2.38,-4.24 -0.66,-6.23 2.4,-0.59 0.56,1.37 0.66,-1.4 7.82,-1.35 0,0 -0.38,0.03 0,0 -0.42,-1.78 7.12,-4.12 4.52,0.98 -0.29,-2.33 -1.73,-0.27 0.74,-4.62 -2.93,-3.13 2.21,-3.08 -1.82,-2.87 1.46,-2.03 -0.52,-4.23 6.23,2.36 -2.85,-8.15 10.44,-0.47 -0.3,-5.28 -4.11,-1.78 -2.72,-7.49 5.64,-4.2 -4.31,-5.19 2.98,-0.74 0.74,-3.07 3.27,-2.59 1.33,-5.48 -1.76,-3.74 2.33,-1.66 -0.07,-2.92 2.43,-1.24 z",
    mapTextOffset_X: "295",
    mapTextOffset_Y: "450",
    isHoverd: false,
  },
  {
    regionName: 'Świętokrzyskie',
    d: "m 385.27601,353.71195 5.43,0.84 -1.31,2.9 2.62,1.86 0.91,5.65 3.19,-0.98 5.65,4.89 -0.71,4.43 1.94,-2.18 8.5,4.46 0.07,-1.58 2.01,0.78 0.23,-3.47 3.16,2.51 2.28,-2.13 0.81,2.07 3.68,-1.22 1.48,-5.52 2.23,2.67 -1.75,3.16 4.45,2.44 -0.67,4.69 12.16,-0.44 1.9,4.32 4.93,2.72 3.14,-2.39 -0.3,-1.95 2.09,0.94 5.27,-1.57 -1.13,-1.08 3.88,-0.16 2,3.52 2.82,0.24 3.19,-2.84 0,0 2.16,21.93 1.59,2.93 0,0 -4.9,16.25 -1.91,-1.04 -5.09,4.19 -4.51,8.66 -9.16,2.47 -0.16,3.32 -8.13,3.3 -5.64,6.07 0,0 -0.5,0.36 0,0 -0.25,0.03 0,0 -1.98,2.37 -2.57,-2.35 -4.65,3.64 -10.05,1.02 -3.53,3.16 -2.82,-1.54 -6.83,7.39 -15.9,1.88 -0.28,-1.66 -2.2,-0.26 1.37,-2.56 -3.45,-3.27 1.57,-2.02 -4.23,-3.07 -0.18,-2.55 2.68,-1.19 -4.08,-6.48 -0.03,-3.39 -17.38,-4.79 -2.32,1.39 0,0 -2.3,-0.74 -0.7,-2.59 -6.9,-1.43 4.35,-6.3 3.27,-0.17 0.64,-2.97 -4.13,-0.63 -0.16,-2.24 1.73,-1.11 -2.08,-1.73 -7.14,-0.81 -1.43,-3.98 2.89,0.78 2.68,-5.98 2.23,0.94 0.22,-1.44 -5.28,-4.07 0,0 2.44,-3.36 0,0 -0.08,-0.24 0,0 1.04,-0.12 0,0 0.47,-0.35 0,0 1.03,-1.08 0,0 0.09,0.01 0,0 0.85,-1.4 0,0 0,-0.97 0,0 -0.88,-4.34 2.9,-7.07 5.25,6.14 4.2,2.17 1.79,-9.23 -4.67,-1.46 -0.1,-6.09 2.52,-2.32 -1.31,-3.06 2.87,-1.24 6.12,2.44 1.59,-1.72 3.7,0.35 1.44,-0.99 -1.37,-4 1.09,-0.34 2.68,1.75 1.72,-1.63 2.38,2.01 1.37,-3.19 -1.29,-3.99 2.62,-0.97 z",
    mapTextOffset_X: "410",
    mapTextOffset_Y: "410",
    isHoverd: false,
  },
  {
    regionName: 'Warmińsko-Mazurskie',
    d: "m 349.88601,42.341946 47.77,7.46 49.85,5.19 81.86,-5.18 0,0 1.14,2.27 -1.89,5.24 -4.61,1.76 -3.66,-0.79 -0.96,1.98 -6.48,2.02 -2.64,4.37 4.66,5.92 2.75,-0.49 2.6,4.98 -1.47,4.4 3.4,2.14 6.94,11.58 0.73,5.080004 -3.87,4.52 -0.91,5.51 -3.69,2.88 0,0 -0.77,0.4 0,0 -1.06,-0.7 -1.3,3.89 -1.36,-1.73 -4.3,3.75 -3.24,0.17 0.56,3.3 -2.94,-1.81 -3.92,2.63 -20.1,16.22 -2.32,-2.41 -4.03,1.33 -3.84,5.19 -10.62,-3.56 -4.77,1.29 0,0 -0.72,-0.04 0,0 -8.99,1.55 -0.3,2.38 -5.13,2.12 -5.34,-1.04 -13.48,9.88 -3.43,-2.92 -3.81,0.35 -1.62,1.3 0.99,2.79 -3.18,-0.23 -1.32,3.05 -8.07,-2.02 -3.76,6.22 -6.32,2.68 -5.94,-2.12 -4.84,3.75 0.66,4.69 -4.34,2.57 -8.52,-1.78 -2.19,1.07 -2.42,-2.23 -7.24,1.96 -4.17,-2.77 0.55,-3.45 0,0 -0.28,-0.55 0,0 -5.11,3.02 0.66,3.99 -5.17,-0.78 0,0 -1.48,-5.21 0,0 0.32,0 0,0 -0.09,-2.4 -3.16,-0.74 -0.29,-2.41 2.77,-1.38 -2.7,-7.66 -9.13,0.77 -1.43,-3.71 -3.93,0.77 0.16,-1.82 -3.84,-3.26 -4.3,0.39 -0.83,2.1 -1.9,-1.37 -4.19,-10.88 -0.28,-5.8 -3.42,-1.53 0,0 -0.44,-2.93 2.92,-3.39 2.29,-0.15 0.16,-5.17 4.71,-5.04 0.99,-6.61 2.2,-1.21 5.66,1.47 2.14,3.2 1.07,-2.95 -1.26,-1.07 4.04,-7.100004 0,0 0,-0.33 0,0 2.98,-7.53 -11.07,2.41 -1.48,-3.18 1.62,-3.07 -5.31,-2.75 -1.94,0.94 -1.15,-1.84 1.14,-1.74 -4.45,-2.03 3.06,-8.78 -1.31,-2.2 4.4,-3.63 -3.7,-6.58 0,0 6.94,1.03 1.72,-1.96 -2.69,6.09 1.05,0.57 1.24,-4.55 6.02,-5.97 10.69,-3.72 4.69,-7.99 z",
    mapTextOffset_X: "425",
    mapTextOffset_Y: "110",
    isHoverd: false,
  },
  {
    regionName: "Wielkopolskie",
    d: "m 169.47601,122.95195 3.43,11.61 3.12,-0.59 -0.02,3.3 3.2,-0.02 2.63,-2.55 4.06,1.63 3.49,-0.7 0,0 1.32,-0.06 0,0 3.84,0.57 1.78,2.67 0,0 0.24,0.09 0,0 3.31,1.18 0,0 -8.84,11.43 1.19,3.46 0.9,-1.44 3.49,1.17 6.04,8.07 -1.48,4.09 -5.51,1.26 1.64,1.48 -0.64,4.69 3.22,1.31 -2.39,1.2 0.65,3.96 -2.35,1.44 0.44,5.92 0,0 -0.3,0.06 0,0 -1.48,2.16 0.9,2.18 4.81,-0.91 7.48,5.57 -0.9,14.06 -5.78,0.32 -0.33,2.92 5.05,2.8 -0.96,4.72 3.18,0.86 3.4,-3.25 3.23,-0.43 -0.09,5.63 3.14,0.43 -0.17,4.76 5.16,-5.62 0.41,2.3 1.38,-2.32 2.78,2.16 2.3,-0.55 2.85,5.62 1.19,-1.01 1.97,2.95 1.32,-1.09 -0.48,3.47 6.57,-0.94 -0.19,3.36 6.33,1.47 0.49,2.18 3.45,0.19 6.52,-6.11 1.24,7.26 4.62,-0.62 1.61,-2.8 2.02,0.55 2.27,3.59 1.99,-0.55 3.43,1.75 0.5,2.83 1.61,-0.63 -0.22,2.84 2.19,0.22 2.37,6.42 9.64,-3.32 0.58,-3.36 3.27,2.46 -0.38,1.91 4.71,2.34 0,0 -0.99,6.05 4.26,0.55 0.29,2.44 -2.03,1.37 1.06,2.12 -5.84,-1.63 -3.96,1.58 -1.21,5.72 2.17,2 -1.01,3.89 -5.27,0.13 -0.87,2.7 -5.19,-1.77 -1.92,1.18 0.82,9.57 4.06,3.75 -5.68,6.71 -0.56,3.98 -5.7,-2.14 -4.83,1.17 -0.76,-2.23 -1.84,0.61 -0.19,3.06 -1.91,-0.46 0.29,2.15 -1.89,1.29 1.16,2.54 -1.63,1.67 0.43,4 -3.53,4.5 1.71,0.74 -2.03,4.95 1.76,0.68 -1.25,6.02 1.46,5.68 -3.35,5.51 -5.41,-3.16 -2.8,0.79 1.44,1.97 -0.77,2.92 -3.43,0.38 -1.08,2.78 -2.76,0.51 1.86,8.75 4.28,-0.57 -1.47,9.43 0,0 -16.72,6.84 -3.97,-1.51 1.85,-5.38 -3.1,-1.56 0,0 -3.25,-5.27 0.2,-8.44 -2.22,-1.2 1.79,-6.74 -11.94,1.04 -2.18,-9.91 4.13,-3.22 -1.44,-3.67 0,0 0,-0.8 0,0 -5.35,-4.14 -10.41,-1.97 -5.02,1.64 -0.68,6.08 -5.91,-0.79 -2.64,0.87 -0.27,2.03 -5.92,0.05 -10.1,-5.38 -1.9,-4.56 -7.83,-1.25 1.49,-4.67 -2.2,-4.22 -4.86,-3.32 -7.73,-0.08 0,0 -2.21,-6.55 -5.46,-4.6 -3,-0.8 -2.75,3.51 -2.39,-2.16 -3.68,-0.2 2.21,-3.12 -0.88,-6.68 -6.41,1.85 -3.65,-4.84 1.83,-2.56 -0.53,-2.27 -2.25,-1.04 -1.28,1.71 -4.27,-4.48 1.85,-3.41 -1.53,-11.54 2.96,-12.84 -5.55,-4.78 0.78,-1.75 1.39,2.71 3.1,-1.99 -1.03,-4.35 -3.21,-3.2 1.43,-2.48 -4.27,-6.14 2.25,-6.75 -1.16,-3.4 8.67,-2.02 -0.64,-7.19 -2.6,-1.13 0.82,-2.47 4.27,-2.06 -0.79,-10.74 0,0 -0.17,-0.12 0,0 -0.47,-3.08 0,0 0,-0.34 0,0 0.6,-4.16 0,0 9.45,3.39 9.03,-4.33 3.05,0.79 -0.73,-1.03 3.57,-3.48 -1.1,-3.93 2.74,-1.03 1.18,-4.38 1.29,1.49 2.5,-2.79 2.56,0.78 1.11,-4.71 1.7,0.48 0.12,-1.65 4.77,2.08 -0.58,-5.45 4.91,-4.04 -4.53,-4.27 -4.64,-1.27 -3.19,-3.02 -1.84,0.59 -1.67,-8.49 0.44,-1.14 2.23,1.68 9.63,-1.61 4.42,-3.61 1.89,-10.32 4.31,-2.2 1.17,1.85 z",
    mapTextOffset_X: "190",
    mapTextOffset_Y: "270",
    isHoverd: false,
  },
  {
    regionName: "Zachodniopomorskie",
    d: "m 11.786011,102.23195 4.79,0.56 -2.98,2.15 0.02,2.41 -3.55,-5.1 1.72,-0.02 z m 5.9,-0.18 0.57,1.34 -2.05,0.97 1.48,-2.31 z m -4.63,-1.01 1.72,1.45 -2.8,-0.02 1.08,-1.43 z m 2.18,-1.260004 -0.09,2.460004 -1.22,-1.71 1.31,-0.750004 z m -7.1799998,-4.24 1.81,-0.17 -2,2.57 5.5999998,9.490004 -7.6199998,-6.1 0.09,-3.460004 -1.78,-1.3 3.9,-1.03 z m 30.9699998,-4.48 -0.04,1.47 -3.22,0.32 0.43,-3.07 2.83,1.28 z m 0.62,-5.52 -4.4,2.66 0.06,5.87 -3.74,4.45 -2.78,9.590004 -1.28,-5.2 -8.61,-1.35 0.56,-4.000004 -0.68,1.87 -2.52,-0.83 -5.74,3.470004 0.82,-1.22 -2.8499998,-2.590004 1.7299998,-2.6 6.88,0.43 6.12,-4.69 16.43,-5.86 z m 119.649999,-57.14 2.81,8.19 2.93,1.21 1.44,3.33 0.42,7.69 -2.7,0.69 0.48,4.96 3.07,3.61 -0.67,2.34 -7.53,2.85 -0.96,2.11 5.46,10.1 -1.32,1.79 1.89,2.77 -1.23,4.1 0,0 -0.42,0.51 0,0 0.35,4.92 0,0 0.71,-0.06 0,0 0.76,-2.57 1.54,0.81 2.04,2.34 0.13,3.64 6.46,3.65 -0.81,3.420004 -4.65,-0.73 -1.34,1.29 -0.03,3.76 4.44,3.3 -5.27,5.36 2.17,9.18 0,0 -3.08,3.27 -1.17,-1.85 -4.3,2.2 -1.9,10.33 -4.41,3.6 -9.63,1.62 -2.23,-1.69 -0.45,1.15 1.68,8.48 1.84,-0.58 3.19,3.01 4.64,1.28 4.52,4.26 -4.91,4.04 0.59,5.45 -4.77,-2.09 -0.12,1.65 -1.7,-0.48 -1.12,4.71 -2.55,-0.77 -2.5,2.78 -1.29,-1.49 -1.18,4.39 -2.73,1.03 1.1,3.94 -3.58,3.48 0.74,1.03 -3.06,-0.79 -9.03,4.32 -9.45,-3.38 0,0 1.5,-6.34 -8.12,-1.94 0.43,2.35 -3.09,1.37 0.54,1.97 -2.52,0.51 1.68,2.15 -3.249999,1.32 0.989999,2.08 -2.289999,1.29 -2.41,-1.22 -2.64,2.23 -5.7,-3.19 -8.18,2.82 -3.33,3.79 -4.55,-1.01 2.15,6.48 -14.94,6.38 -2.21,-2.53 -2.56,1.8 -5.28,-4.38 -2.04,2.75 2.05,1.91 -3.88,1.21 0.78,3.01 -3.97,3.2 -3.25,11.53 -2.26,1.44 -4.71,-2.56 -2.09,1.77 0.07,3.59 0,0 -8.33,-5.51 -6.87,-8.95 -8.1299998,-6.62 -5.84999998,-2.23 2.30999998,-4.67 -1,-7.74 12.1999998,-9.21 2.6,-9 -0.63,-5.94 4.31,-6.45 -2.39,-4.63 -3.31,-18.78 -2.83,-5.34 0.58,-7.55 -2,-1.76 -1.0999998,-6.51 2.5899998,-0.63 -1.39,-4.04 2.84,0.9 4.64,5.65 5.85,1.22 5.74,7.4 1.33,-6.18 -2.96,-0.14 -1.95,-4.79 1.67,-6.2 3.01,-0.49 -0.56,-5.58 2.74,-7.540004 4.41,-4.58 2.15,1.58 0.27,-4.75 1.42,-0.4 -1.34,-2.03 2.44,-3.69 -4.76,0.78 34.65,-12.91 12.57,-2.06 21.299999,-7.6 15.15,-3.38 10.18,-8.13 15.9,-19.6 12.32,-3.16 z",
    mapTextOffset_X: "80",
    mapTextOffset_Y: "130",
    isHoverd: false,
  },

]


export default regions;