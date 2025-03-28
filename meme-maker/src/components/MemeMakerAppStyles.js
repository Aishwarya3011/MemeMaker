// MemeMakerAppStyles.js

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "url('/images/background.jpg') no-repeat center center fixed",
    backgroundSize: 'cover',
    opacity: 0.2,
    zIndex: -1,
  },
  // content styles
  content: {
    position: 'relative',
    zIndex: 1,
    padding: '2rem',
    textAlign: 'center',
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    paddingBottom: '5rem',
  },
  header: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#333',
  },
  form: {
    marginBottom: '2rem',
  },
  textInput: {
    margin: '1rem 0',
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '300px',       
    marginRight: '1rem',  
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#ff6f61',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  result: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    display: 'inline-block',
  },
  memeContainer: {
    position: 'relative',
    display: 'inline-block', 
    marginTop: '1rem',
  },
  memeImage: {
    maxWidth: '600px',   
    width: '100%',       
    height: 'auto',
    display: 'block',
    borderRadius: '8px',
  },
  overlayText: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)', 
    color: '#fff',
    fontSize: '2rem',              
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
    zIndex: 1,                     
    fontFamily: 'Impact, Charcoal, sans-serif',
  },
  downloadOverlay: {
    position: 'absolute',
    bottom: '10px',       
    right: '10px',        
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    zIndex: 2,
  },
  // Footer styles
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#ffc1cc',
    padding: '1rem',
    textAlign: 'center',
    borderTop: '4px solid #ff6f61',
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    zIndex: 999,
  },
  footerText: {
    margin: 0,
    fontSize: '1rem',
    color: '#333',
  },
  linkedinLink: {
    marginLeft: '0.5rem',
    textDecoration: 'none',
    color: '#0077B5',
  },
  linkedinIcon: {
    fontSize: '1.5rem',
    verticalAlign: 'middle',
  },
  
};

export default styles;
