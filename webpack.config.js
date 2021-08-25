// For WebStorm aliases detecting
import path from 'path';

const pathStyles: string = path.resolve(__dirname, './src/styles')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'styles': pathStyles,
    },
  },
};
