//Nombre de la lista de produtos
var products = ["Tayman", "Kerala", "The Brass Coq", "Sungenre", "Mitragyna Speciosa",
 "Foam King", "Volition", "Ink", "Gilkon", "Owls & Apples", "Sherwood", "Platinum"];
var cantImages =products.length;
//Dirección de la carpeta de imágenes
var nameFile="assets/img/";
function divImage(products,cantImages,nameFile,proyects){
      var contForDiv=document.getElementById(proyects);
      var listImages=document.createElement("ul");
      for(var i=1;i<cantImages+1;i++){
          var liImages=document.createElement("li");

          liImages.setAttribute("class","boximages");
          var divForImage=document.createElement("div");
          //Designando el nombre de cada producto a name
          var name=products[i-1];
          //
          contForDiv.appendChild(divForImage);
          divForImage.setAttribute("id",name);

          divForImage.setAttribute("class","popup-link");
          var aImage=document.createElement("a");
          aImage.setAttribute("href","#popup"+i);
          var imgForImage=document.createElement("img");
          imgForImage.setAttribute("src",nameFile+"img-"+i+".jpg");
          imgForImage.setAttribute("class","img-boximages");
          imgForImage.setAttribute("alt",name);

          aImage.appendChild(imgForImage);
          var figcap=document.createElement("figcaption");
          figcap.setAttribute("class","center");
          var nameImage=document.createElement("span");
          nameImage.classList.add("nameImage");
          nameImage.innerHTML=name;

          figcap.appendChild(nameImage);
          aImage.appendChild(figcap);
          divForImage.appendChild(aImage);
          liImages.appendChild(divForImage);
          listImages.appendChild(liImages);
///
          var divForModal=document.createElement("div");
          divForModal.setAttribute("class","modal-wrapper");
          divForModal.setAttribute("id","popup"+i);
          var divForPop=document.createElement("div");
          divForPop.setAttribute("class","popup-contenedor");
          var divForImageModal=document.createElement("div");
          divForImageModal.setAttribute("class","divForImageModal");
          var imgModal=document.createElement("img");
          imgModal.setAttribute("src",nameFile+"img-"+i+".jpg");
          imgModal.setAttribute("class","img-boxmodal");
          divForImageModal.appendChild(imgModal);
          divForPop.appendChild(divForImageModal);
          var aModal=document.createElement("a");
          aModal.setAttribute("class","modal-close");
          aModal.setAttribute("href","#"+name);
          aModal.innerHTML="X";
          divForPop.appendChild(aModal);
          divForModal.appendChild(divForPop);
          liImages.appendChild(divForModal);
      }
    contForDiv.appendChild(listImages);
  }

  divImage(products,cantImages,nameFile,"proyects");
