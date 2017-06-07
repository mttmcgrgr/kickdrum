module.exports = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(106, 151, 200, 0.75)',
    width             : '100%',
    height            : '100%'
  },
  content : {
    display        : 'flex',
    top            : '50%',
    left           : '50%',
    right          : 'auto',
    bottom         : 'auto',
    marginRight    : '-50%',
    transform      : 'translate(-50%, -50%)',
    width          : '995px',
    height         : '549px',
    zIndex         : 1000
  }
};
