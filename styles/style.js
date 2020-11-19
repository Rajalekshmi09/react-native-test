const styles = {
  h1: {
    fontSize: 50,
  },
  input: {
    color: "black"
  },
    html: {
      height: 100,
      margin: 0
    },
    
    box: {
      boxSizing: "borderBox",
    } ,
    
    bgimage: {
           
      /* Add the blur effect */
      filter: "blur(6)",
      webkitFilter: "blur(6)",
      
      /* Full height */
      height: 100, 
      
      
      /* Center and scale the image nicely */
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    /*
    /* Position text in the middle of the page/image */
     bgtext: {
       backgroundColor: "rgb(0,0,0)", /* Fallback color */
      backgroundColor: "rgba(0,0,0, 0.4)", /* Black w/opacity/see-through */
       color: "white",
       fontWeight: "bold",
       border: "3 solid #f1f1f1",
       position: "absolute",
       top: 350,
        left: 50,
       transform: "translate(-50, -50)",
       zIndex: 2,
       width: 50,
       padding: 20, 
       textAlign: "center",
     },
    
     /*text box:*/
       inputtext: {
       width: 100,
       padding: 15,
       margin: "5px 0 22px 0",
       border: "none",
       background: "#f1f1f1",
     },
  
     inputpassword: {
       width: 100,
       padding: 15,
       margin: "5px 0 22px 0",
       border: "none",
       background: "#f1f1f1",
     },
    
       inputtextFocus: {
       backgroundColor: "#ECF0F1" ,
       outline: "none",
     },
    
  
       inputpasswordFocus: {
       backgroundColor: "#ECF0F1" ,
       outline: "none",
     },
    
     /*button:*/
     button: {
       padding: "10 20",
     
       fontSize: 20,
       textAlign: "center",
       cursor: "pointer",
       outline: "none",
       color: "#fff",
       backgroundColor: "#4CAF50",
       border: "none",
       borderRadius: 12,
       boxShadow: "0 9 #999",
     },
    
    buttonHover: {backgroundColor: "#3e8e41"},
    
   
     buttonActive: {
       backgroundColor: "#3e8e41",
       boxShadow: "0 5 #666",
       transform: "translateY(4)",
     } 
}  

export default styles



  
  
  