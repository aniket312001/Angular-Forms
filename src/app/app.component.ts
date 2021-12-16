import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  // loginForm = new FormGroup({
  //   user:new FormControl(''),
  //   password:new FormControl('')
  // })


  // loginUser(){
  //   console.warn(this.loginForm.value)
  // }
//////////////////////////////////////////////////////////////////////////////////////

    
  signupform!:FormGroup
  name:any
  password:any
  data : any
  constructor(private formbuilder : FormBuilder){
      this.signupform=formbuilder.group({
        name:new FormControl('w4n',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])),
        password:new FormControl('',[Validators.required,Validators.minLength(3)])
      })
   

  }

  postData(signupform1:any){
    console.log(signupform1.controls)
    this.name = signupform1.controls.name.value 
    console.log(this.name)
    
  }

  reset(){
    this.signupform.reset()
  }
  
  post(){
    // console.log("sgisrh")
    console.log(this.signupform.get('name')?.value)
    console.log(this.signupform.get('password')?.value)
  }
  

  Filldata(){
    this.signupform.setValue({  //compalsory all elements of form
      "name":"king",
      "password":"1234"
    })
  }

  pFilldata(){
    this.signupform.patchValue({  // any value of element of form
      "name":"king"
    })
  }

  form :any
  // ValueChange and StatusChange 
ngOnInit(){
  this.signupform.get("name")?.valueChanges.subscribe(name=>{   // every change value it will print 
    console.log("change value is "+name)
  })

  this.signupform.valueChanges.subscribe((data:any)=>{  // WHOLE dATA
    console.log(data.name)
    console.log(data.password)

  })


  this.signupform.get("name")?.statusChanges.subscribe(status=>{  // status only for name
    console.log(status)
  })

  this.signupform.statusChanges.subscribe(status=>{  // whole form status 
    console.log("all form status is "+ status)
  })
  
// FormArray  will track value and status
  const arr = new FormArray([
    new FormControl('ajeet'),
    new FormControl('ajeet2'),
    
  ])


  
  console.log(arr.value)
  console.log(arr.status)


  
  // Nested FormArray
  this.form = new FormGroup({
    ContactNos: new FormArray([
      new FormControl('966548858'),
      new FormControl('897547785'),
    ])
  })


  
}
onsend(){
  console.log(this.form.get('ContactNos').value)
  console.log(this.form.value)
}
addContact(){
  this.form.get('ContactNos').push(new FormControl())
}
setPreset(){

  this.form.get('ContactNos').patchValue(['4377222','6743234567'])
}


  
register(reg:NgForm){
  if (reg.invalid)
    return;
  console.log(reg.value)
  console.log(reg.valid)
  console.log(reg.touched)
}

clear(reg:NgForm){
  reg.reset()
}

fill(reg:NgForm){
  reg.setValue({
    "nm":"king",
    "age1":44,
    "gen":"male",
    "email":"a@gmail.com",
    "isindian": "true",
    "Accepted":false
  })
}

}
