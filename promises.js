const seconds = new Promise((res, rej) => {

  res(1);
});
const minutes = new Promise((res,rej)=>{
    res(1)
})


let main = async () => {
  try {


    await seconds.then((sec) => {

            for (let i = 0; i < 10; i++) {
              setTimeout(() => {
                console.log("00", "00", sec);
                sec++;
              }, i * 1000);
            }     
      
    });

  //  await minutes.then((mins)=>{

  //        setTimeout(() => {
            
  //            console.log(mins);
             
  //        }, 10000);

  //   })


  } catch (error) {
    console.log(error);
  }
};
main();
