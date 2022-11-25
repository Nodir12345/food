let foods =[
  {
    id:1,
    name:"lavash",
    narx:15000,
    count:30
  }, 
   {
    id:2,
    name:"osh",
    narx:25000,
    count:20
  }, 
   {
    id:3,
    name:"tovuq",
    narx:4400,
    count:35
  }, 
   {
    id:4,
    name:"tushonka",
    narx:85000,
    count:15
  }, 
   {
    id:5,
    name:"tandir",
    narx:100000,
    count:30
  }, 
  {
    id:6,
    name:"pizza",
    narx:65000,
    count:30
  }, 
   {
    id:7,
    name:"manti",
    narx:5000,
    soni:30
  }, 
  {
    id:8,
    name:"shashlik",
    narx:20000,
    count:30
  }, 
   {
    id:9,
    name:"somsa",
    narx:7000,
    count:100
  }, 
   {
    id:10,
    name:"lagmon",
    narx:15000,
    count:30
  }, 
   ]
   let nomi = "a"
   while(nomi){
       nomi = prompt(`Ovqat turini kiriting bizda bizda 10 tur ovqat bor :
       1) Lavash
       2) Osh
       3) Tovuq
       4) Tushonka
       5) Tandir 
       6) Pizza
       7) Manti
       8) Shashlik
       9) Somsa
       10) Lagmon
     
        `)

        let boryokiyoq = false
        for(let ovqat of foods){
          if(ovqat.name.toLowerCase() == nomi.toLowerCase()) {
            boryokiyoq = true
          }
        }

        let soni = 0
        if(boryokiyoq){
          soni = prompt(`Nechta ${nomi} kerak`)
        }
         else{

          alert("bizda bunaqa ovqat yuq iltimos boshqa ovqat buyirtma bering")
        }

      if(soni>0){
        let food ={}
        for(let ovqat of foods){
          if(ovqat.name?.toLowerCase() == nomi?.toLowerCase()) {
           food = ovqat
          }
        }
        if(food.count >= soni){
          alert(`sizdan ${soni*food.narx} som buldi`)
        }else{
          alert(`bizda ${food.count} bor ekan ${soni-food.count} ta ni 15daqiqada tayyor qilib beramiz`)
        }
        let hayuq = prompt("15minut kuta olasizmi ha kiriting")
        
         if(hayuq = "ha"){
          alert("kuta olishingiz uchun raxmat")
        }
         else{
           alert("boshqa restauranga borishingiz mumkin")}
      }

   }