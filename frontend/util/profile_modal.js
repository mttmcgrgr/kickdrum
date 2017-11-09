module.exports = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    width             : '100%',
    height            : '100%'
  },
  content : {
    display        : 'flex',
    padding        : "0px",
    top            : '50%',
    left           : '50%',
    right          : 'auto',
    bottom         : 'auto',
    marginRight    : '-50%',
    transform      : 'translate(-50%, -50%)',
    width          : '800px',
    height         : '400px',
    zIndex         : 10,
    borderRadius   : "0px",
    fontWeight     : "bold",
    overflow       : "hidden",
    boxShadow      : "-15px 15px 15px black",
  }
};
