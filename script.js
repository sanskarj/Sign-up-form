var user_list=[];



var users = function(firstname,lastname,email,profession){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.profession = profession;
    this.interests = [];
    this.projects =[];
}

users.prototype.specialization="";
users.prototype.comments = "";
users.prototype.awards="";
users.prototype.field ="";



function secondpage(a,b,c,d){
    var user = new users(a,b,c,d);
    user_list.push(user);
    console.log(user_list);
    
    var secondpagehtml = `<div class="container-fluid">
    <div class="add-interest">
        <div class="popup-que">
            <div class="close-button">
                <span class="arrow-5">&times;</span>
            </div>
            <div class="question">
                <h5 class="question-header">We want to know what you like.write it here <span class="arrow-4">&rarr;</span></h5>
            </div>
            <div class="input-field">
                <input type="text" class="form-control interest-input" placeholder="write some text">
            </div>
            <div class="interest-submit">
                <button class="btn-5">Submit <span class="arrow-4">&rarr;</span> </button>
            </div>
        </div>
    </div>
   <div class="second-signup-container">
   <div class="popup-2">
       <div class="row row-1">
           <div class="col">
               <h4 class="heading">Here you can find the things that interests you <span class="arrow-3">&searr;</span></h4>
           </div>
       </div>
       <div class="row row-2">
           <div class="col check-column">
               <div class="row check-row">
                   <div class="col-4">
                       <div class="cutom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="check-1" value="Technology"><label for="check-1" class="custom-control-label">Technology</label></div>
                   </div>
                   <div class="col-4">
                           <div class="cutom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="check-2" value="Health and medicine"><label for="check-2" class="custom-control-label">Health and medicine</label></div>
                   </div>
                   <div class="col-4">
                           <div class="cutom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="check-3" value="Psychology"><label for="check-3" class="custom-control-label">Psychology</label></div>
                   </div>
               </div>
               <div class="row check-row">
                    <div class="col-4">
                           <div class="cutom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="check-4" value="Artists"><label for="check-4" class="custom-control-label">Artists</label></div>
                    </div>
                    <div class="col-4">
                           <div class="cutom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="check-5" value="Novels and books"><label for="check-5" class="custom-control-label">Novels and books</label></div>
                    </div>
                    <div class="col-4">
                           <div class="cutom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="check-6" value="Adventure"><label for="check-6" class="custom-control-label">Adventure</label></div>
                    </div>
               </div>
               <div class="row check-row">
                   <div class="col-4">
                           <div class="cutom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="check-7" value="Movies,comics,short stories"><label for="check-7" class="custom-control-label">Movies,Comics,short stories</label></div>
                   </div>
                   <div class="col-4">
                           <div class="cutom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="check-8" value="Quantum computing"><label for="check-8" class="custom-control-label">Quantum Computing</label></div>
                   </div>
                   <div class="col-4">
                           <div class="cutom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="check-9" value="Fashion designs"><label for="check-9" class="custom-control-label">Fashion Designs</label></div>
                   </div>
               </div>
           </div>
       </div>
       <div class="row row-3">
           <div class="col">
               <div class="row">
                   <div class="col">
                   <button class="btn-2 interest-button">Add New <span class="arrow-1">&plus;</span></button>
                   </div>
               </div>
               <div class="row next-button-row">
                   <div class="col-6 btn-column">
                       <button class="btn-4 next-button">Next <span class="arrow-3">&rarr;</span></button>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="./script.js"></script>`
$(".whole-body").hide(1000,function(){
    $(".whole-body").html(secondpagehtml);
    $(".whole-body").show(1000);
    $(".interest-button").click(function(){
       
        $(".popup-que").css("top","0");
        $(".popup-que").css("opacity","0");
        $(".add-interest").css("display","block");
        $(".popup-que").animate({
            opacity : "1",
            top:"50%"
        },500,"swing");
 
        
        
        
    });
    $(".btn-5").click(function(){
        if($(".interest-input").val()!=""){
            user.interests.push($(".interest-input").val());
        
        
        $(".popup-que").animate({
            opacity : "0"
        },500,"linear",function(){
         $(".add-interest").css("display","none");
         $(".popup-que").css("opacity","1");
        });
    }
    else{
        alert("fill out your interest");
        $(".interest-input").focus();
    }
       
    });
    $(".arrow-5").click(function(){
     $(".popup-que").animate({
         opacity : "0"
     },500,"linear",function(){
      $(".add-interest").css("display","none");
      $(".popup-que").css("opacity","1");
     });
    });
    $(".btn-4").click(function(){
       
       for(var i=1;i<=9;i++)
       {
        if($(`#check-${i}`).prop("checked")==true)
        {
              user.interests.push($(`#check-${i}`).val());
        }
       }
       $(".whole-body").hide(2000,function(){
            var thirdpagehtml = `<div class="container-fluid">
            
            <div class="popup-4">
                <div class="form-profess">
               
                    <div class="choose">
                    <h4 class="header">choose your specialization <span class="arrow-7">&rarr;</span>
                    </h4>
                 </div>
                 <div class="prof-selection">
                     <select name="" id="prof" class="custom-select special-selector">
                         <option value="Health and medicines">Health and medicines</option>
                         <option value="Engineering">Engineering</option>
                         <option value="Teaching">Teaching</option>
                         <option value="Artist">Artist</option>
                         <option value="Designing">Designing</option>
                         <option value="Author/poet">Author/poet</option>
                         <option value="athlete">athlete</option>
                          <option value="games_and_sports">games_and_sports</option>
                          <option value="others">others</option>
                     </select>
                 </div>
                
                
                <div class="spec-heading">
                    <h5 class="describe header">some quick questions to know your profession.click below
                         <span class="arrow-7">&rarr;</span>
                    </h5>
                </div>
                <div class="describe-button">
                   <button class="btn-7 interest-button third-page-button">click me <span class="arrow-8">&rarr;</span></button>
                </div>
                <div class="next-page-button">
                    <button class="btn-5 third-page-buttons third-page-button">Next <span class="arrow-8">&rarr;</span></button>
                </div>
                </div>
            </div>
         </div>
     
     
                 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                 <script src="./script.js"></script>`;
                 $(".whole-body").html(thirdpagehtml);
                 $(".whole-body").show(2000);
                 $(".btn-7").click(function(){
                    var specialization = $(".special-selector").val();
                    var popup_special;
                    
                    if(specialization!="others")
                    { 
                     popup_special = `<div class="add-interest specialization-interest">
                     <div class="special-popup popup-que">
                     <div class="close-popup-button">
                            <span class="arrow-90">&times;</span>
                        </div>
                         <div class="popup-special">
                             
                             <form action="" class="special-form">
                                 <div class="form-group">
                                     <label for="special-field" class="special-label">The field of ${specialization},you are specialized in:</label>
                                     <input type="text" class="form-control" id="special-field" placeholder="specialization" required>
                                 </div>
                                 <div class="form-group">
                                     <label for="special-award">Your Awards and Achievements(If any):</label>
                                     <input type="text" class="form-control" id="special-award" placeholder="Awards">
                                 </div>
                                 <div class="form-group">
                                     <label for="special-project">Your projects(If any):</label>
                                     <div class="input-group">
                                         <input type="text" class="form-control pro-1" id="special-project" placeholder="project-1">
                                         <input type="text" class="form-control pro-2" placeholder="project-2">
                                         <input type="text" class="form-control pro-3" placeholder="project-3">
                                         <input type="text" class="form-control pro-4" placeholder="project-4">
              
                                     </div>
                                 </div>
                                 
                                 
                             </form>
                         </div>
                         <div class="form-grouping">
                                 <label for="special-write">Anything else you want to mention:</label>
                                 <textarea name="additional-text" id="" cols="30" rows="3"class="form-control textfield"></textarea>
                         </div>
                         <div class="special-button">
                             <button class="btn-9">Submit<span class="arrow-45">&rarr;</span></button>
                         </div>
                         </div>
                        
                     </div>`;
             
                    }
                    else{
                         popup_special =`<div class="add-interest specialization-interest">
                         <div class="special-popup popup-que">
                         <div class="close-popup-button">
                         <span class="arrow-90">&times;</span>
                                 </div>
                             <div class="popup-special">
                                 
                                 <form action="" class="special-form">
                                     <div class="form-group">
                                         <label for="special-field" class="special-label">Write your field of specialization:</label>
                                         <input type="text" class="form-control" id="special-field" placeholder="specialization" required>
                                     </div>
                                     <div class="form-group">
                                         <label for="special-award">Your Awards and Achievements(If any):</label>
                                         <input type="text" class="form-control" id="special-award" placeholder="Awards">
                                     </div>
                                     <div class="form-group">
                                         <label for="special-project">Your projects(If any):</label>
                                         <div class="input-group">
                                             <input type="text" class="form-control pro-1" id="special-project" placeholder="project-1">
                                             <input type="text" class="form-control pro-2" placeholder="project-2">
                                             <input type="text" class="form-control pro-3" placeholder="project-3">
                                             <input type="text" class="form-control pro-4" placeholder="project-4">
                  
                                         </div>
                                     </div>
                                     
                                     
                                 </form>
                             </div>
                             <div class="form-grouping">
                                     <label for="special-write">Anything else you want to mention:</label>
                                     <textarea name="additional-text" id="" cols="30" rows="3"class="form-control textfield"></textarea>
                             </div>
                             <div class="special-button">
                                 <button class="btn-9">Submit<span class="arrow-45">&rarr;</span></button>
                             </div>
                             </div>
                            
                         </div>`;

                    }
                    
                    
                  $(".popup-4").before(popup_special);
                 $(".popup-que").css("top","0");
                 $(".popup-que").css("opacity","0");
                 $(".add-interest").css("display","block");
                 $(".popup-que").animate({
                     opacity : "1",
                     top:"50%"
                 },500,"swing",function(){
                    $(".btn-9").click(function(){
                        user.specialization = $(".special-selector").val();
                            
                            
                        user.field = $("#special-field").val();
                            

                        
                        user.awards = $("#special-award").val();
                        for(i=1;i<=4;i++)
                        {
                            console.log($(`.pro-${i}`).val());
                            user.projects.push($(`.pro-${i}`).val());
                        }
                        user.comments =  $(".textfield").val();
                        
                    
                   
                   $(".popup-que").animate({
                       opacity :"0",
                       top : "0"
                   },500,"linear",function(){
                       $(".add-interest").css("display","none");
                       $(".popup-que").css({
                           opacity : "1",
                           top : "50%"
                       });

                   });

                        
                        
                      
                   

               });   
               $(".arrow-90").click(function(){
                $(".popup-que").animate({
                    opacity :"0",
                    top : "0"
                },500,"linear",function(){
                    $(".add-interest").css("display","none");
                    $(".popup-que").css({
                        opacity : "1",
                        top : "50%"
                    });
                });
               });
                 });
                });
                $(".third-page-buttons").click(function(){
                       var new_html_pages = `<div class="container-fluid fourth_page">
                       <div class="popup-5">
                           <div class="image-container">
                               <img src="./soccer_green_background_repeating_symbols_sketch_decoration_6827636/download-1013983_1920.jpg" alt="" class="image-4">
                           </div>
                           <div class="head-final">
                               <h3 class="heading-final">Thank you for signing up!</h3>
                           </div>
                          <div class="button-final">
                              <button class="btn-10 btn btn-success">
                                  Continue <span>&rarr;</span>
                              </button>
                          </div>
                       </div>
                   </div>
                       <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                       <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                       <script src="./script.js"></script>`;
                   $(".whole-body").hide(2000,function(){
                       $(".whole-body").html(new_html_pages);
                       $(".whole-body").show(2000);
                       $(".btn-10").click(function(){
                           $(".popup-5").hide(2000);
                       })
                   });

                });
                
                


                
       });
       

       
       
    });
 
    

    
        

   

});
    
   

    
}
$(document).ready(function(){
   $(".btn-1").click(function(){
       var a = $(".name-1").val();
       var b = $(".name-2").val();
       var c = $(".input_email").val();
       var d = $(".custom-select").val();
      if(a==""){alert("enter your name to continue")}
       
      else if(!/^[A-Za-z\s]+$/.test(a)){alert("the name you entered is invalid.please refill it")}
       
      else if(b==""){alert("fill out your last name")}
      else if(!/^[A-Za-z\s]+$/.test(b)){alert("the 'last-name' you entered is incorrect try to fix it")}
      else if(c==""){alert("email is compulsory to enter")}
      else if(!/\S+@\S+\.\S+/.test(c)){alert("include'@' character in your email")}
      else{secondpage(a,b,c,d)}
     

   });
   
});


