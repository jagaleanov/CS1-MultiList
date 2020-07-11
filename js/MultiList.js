// JavaScript Document

//CLASES
class NodeSubject {
	
	//next;
	//back;
	//down;
	//name;
	
	constructor(name) {
		this.name = name;
		this.back = null;
		this.next = null;
		this.down = new StudentList();
	}
	
	setBack(back) {
		this.back = back;
	}
	
	setNext(next) {
		this.next = next;
	}
	
	setDown(down) {
		this.down = down;
	}
	
	getName() {
		return this.name;
	}
	
	getNext() {
		return this.next;
	}
	
	getBack() {
		return this.back;
	}
	
	getDown() {
		return this.down;
	}
}

class NodeStudent {
	
	//next;
	//back
	//nameStudent;
	
	constructor(nameStudent) {
		this.name = nameStudent;
		this.next = null;
	}
	
	setNext(next) {
		this.next = next;
	}
	
	getName() {
		return this.name;
	}
	
	getNext() {
		return this.next;
	}
	
	getBack() {
		return this.back;
	}
	
	setBack(back) {
		this.back = back;
	}
}

class SubjectsList {
	//head;
	
	constructor() {
		this.head = null;
	}
	
	issetSubject(name) {
		var temp = this.head;
		while(temp != null) {
			
			if(temp.getName() == name) {
				return true;
			}
			
			temp=temp.getNext();
		}
		return false;
	}	
	
	insertSubject(name) {
		var newNode = new NodeSubject(name);
		if(! this.issetSubject(name)) {
			if(this.head != null) {//si la cabeza esta nula
				var temp = this.head;
				if(newNode.getName().localeCompare(temp.getName())>-1) {//si el primero en la lista es menor que el nuevo nodo
					while(newNode.getName().localeCompare(temp.getName())>-1) {//mientras encuentre mas menores
						if( temp.getNext() != null ) {
							temp=temp.getNext();
						}else{
							break;
						}
					}

					if(newNode.getName().localeCompare(temp.getName())>-1) {//si temp es el ultimo en la cola revisar si es menor (el bucle no diferencia si el ultimo es menor porque es el ultimo, no puede devolver null)
						newNode.setNext(null);
						newNode.setBack(temp);
						temp.setNext(newNode);
					}else{//si esta en medio del primero y el ultimo
						newNode.setNext(temp);
						newNode.setBack(temp.getBack());
						temp.getBack().setNext(newNode);
						temp.setBack(newNode);
					}
				}else{//si va antes del primero
					var tempo = this.head;
					tempo.setBack(newNode);
					this.head = newNode;
					this.head.setNext(tempo);
					this.head.setBack(null);
				}
			} else {//si aun no existe lista
				this.head = newNode;
			}
		} else {
			alert("Ya existe "+name+" en la lista.");
		}
	}
	
	insertStudent(subject,nameStudent) {
		
		if(this.issetSubject(subject)) {
			var temp = this.head;
			while(temp != null) {

				if(temp.getName() == subject) {
					temp.getDown().insertStudent(nameStudent);
					break;
				}

				temp=temp.getNext();
			}
		} else {
			alert("La materia "+subject+" no existe");
		}
		
	}
	
	deleteStudent(subject,nameStudent) {
		
		if(this.issetSubject(subject)) {
			var temp = this.head;
			while(temp != null) {

				if(temp.getName() == subject) {
					temp.getDown().deleteStudent(nameStudent);
					break;
				}

				temp=temp.getNext();
			}
		} else {
			alert("La materia "+subject+" no existe");
		}
		
	}
	
	deleteSubject(name) {
		
	
		
		var temp = this.head;
		while(temp != null) {
			if(temp.getName() == name) {
				
				if(temp.getDown().getNodeHead() == null) {
					if(temp.getBack()==null && temp.getNext()==null) {
						this.head = null;
					} else if(temp.getBack()==null) {
						this.head = temp.getNext();
						this.head.setBack(null);
					} else if(temp.getNext()==null) {
						temp.getBack().setNext(null);
						temp.setBack(null);
					}else{
						temp.getBack().setNext(temp.getNext());
						temp.getNext().setBack(temp.getBack());
						temp.setNext(null);
						temp.setBack(null);
					}

					break;
				}else{
					alert("No se puede retirar la materia "+name+", tiene estudiantes matriculados");
				}
				
			}
			
			temp=temp.getNext();
		}
	}
	
	printObj(){
		console.log(this.head);
	}
	
	print(){
		var temp = this.head;
		while(temp != null) {
			
			console.log(temp.getName());
			temp=temp.getNext();
			console.log("alumnos:");
			//temp.getDown().print();
			
			
		}
		console.log("");
	}
	
	getNodeHead() {
		return this.head;
	}
	
	getMaxCountStudents() {
		var temp = this.head;
		var max = 0;
		while(temp != null) {
			
			if(temp.getDown().countSubjects()>max) {
				max = temp.getDown().countSubjects();
			}
			
			temp=temp.getNext();
		}
		
		return max;
	}
}

class StudentList {
	//head;
	
	constructor() {
		this.head = null;
	}
	
	issetStudent(nameStudent) {
		var temp = this.head;
		while(temp != null) {
			
			if(temp.getName() == nameStudent) {
				return true;
			}
			
			temp=temp.getNext();
		}
		return false;
	}	
	
	insertStudent(nameStudent) {
		var newNode = new NodeStudent(nameStudent);
		if(! this.issetStudent(nameStudent)) {
			if(this.head != null) {//si la cabeza esta nula
				var temp = this.head;
				if(newNode.getName().localeCompare(temp.getName())>-1) {//si el primero en la lista es menor que el nuevo nodo
					while(newNode.getName().localeCompare(temp.getName())>-1) {//mientras encuentre mas menores
						if( temp.getNext() != null ) {
							temp=temp.getNext();
						}else{
							break;
						}
					}

					if(newNode.getName().localeCompare(temp.getName())>-1) {//si temp es el ultimo en la cola revisar si es menor (el bucle no diferencia si el ultimo es menor porque es el ultimo, no puede devolver null)
						newNode.setNext(null);
						newNode.setBack(temp);
						temp.setNext(newNode);
					}else{//si esta en medio del primero y el ultimo
						newNode.setNext(temp);
						newNode.setBack(temp.getBack());
						temp.getBack().setNext(newNode);
						temp.setBack(newNode);
					}
				}else{//si va antes del primero
					var tempo = this.head;
					tempo.setBack(newNode);
					this.head = newNode;
					this.head.setNext(tempo);
					this.head.setBack(null);
				}
			} else {//si aun no existe lista
				this.head = newNode;
			}
		} else {
			alert("El estudiante "+nameStudent+" ya se encuentra matriculado en esta materia");
		}
	}
	
	deleteStudent(nameStudent) {
		var temp = this.head;
		while(temp != null) {
			
			if(temp.getName() == nameStudent) {
				if(temp.getBack()==null && temp.getNext()==null) {
					this.head = null;
				} else if(temp.getBack()==null) {
					this.head = temp.getNext();
					this.head.setBack(null);
					temp.setNext(null);
				} else if(temp.getNext()==null) {
					temp.getBack().setNext(null);
					temp.setBack(null);
				}else{
					temp.getBack().setNext(temp.getNext());
					temp.getNext().setBack(temp.getBack());
					temp.setNext(null);
					temp.setBack(null);
				}
				
				
				break;
			}
			
			temp=temp.getNext();
		}
	}
	
	printObj(){
		console.log(this.head);
	}
	
	print(){
		var temp = this.head;
		while(temp != null) {
			
			console.log(temp.getName());
			temp=temp.getNext();
		}
		console.log("");
	}
	
	getNodeHead() {
		return this.head;
	}
	
	countSubjects() {
		var temp = this.head;
		var counter = 0;
		while(temp != null) {
			counter++;
			temp=temp.getNext();
		}
		
		return counter;
	}
}

//FUNCIONES
function fillSelect() {
	var headNodeSelect = myList.getNodeHead();
	
	$("#subject_to").html('<option value="">--</option>');
	
	while(headNodeSelect != null) {
		
		$("#subject_to").append($("<option>").val(headNodeSelect.getName()).text(headNodeSelect.getName())); 
		
		headNodeSelect = headNodeSelect.getNext();
	}
}

function printSubjects() {
	var headNode = myList.getNodeHead();
	var counter = 0;
	$('#tr_subjects').html("");
	
		while(headNode != null) {
			
			if(counter>0) {
				$('#tr_subjects').append('<th id="th_arrow_1"><img src="img/arrow-right.png" alt="right-arrow" width="29"></th>');
			}
			
			$('#tr_subjects').append('<th id="th_subject_1"><span class="badge badge-pill badge-info" onClick="delSubject(\''+headNode.getName()+'\')" title="Eliminar materia">'+headNode.getName()+'</span></th>');
			
			headNode = headNode.getNext();
			counter++;
		}
	fillSelect();
	}

function printStudents() {
	var headNode = myList.getNodeHead();
	var quantMaxStudents = myList.getMaxCountStudents();
		
	var stringHtml = "";
	
	$('#t_students').html("");
	
	for(var i=0; i<quantMaxStudents; i++) {
		stringHtml += '<tr id="tr_arrow_'+i+'"></tr><tr id="tr_badge_'+i+'"></tr>';
	}
	
	$('#t_students').append(stringHtml);
	
	var counterSubj = 0;
	while(headNode != null) {
				
		var headNodeStudent = headNode.getDown().getNodeHead();
		
		var counterStud = 0;
		
		for(var j=0; j<quantMaxStudents; j++) {
			
			if(counterSubj>0) {//Añadir espacio a la izquierda debajo de la flecha de materia
				$('#tr_arrow_'+counterStud+'').append('<td class="td_student_'+counterSubj+'"></td>');

				$('#tr_badge_'+counterStud+'').append('<td class="td_student_'+counterSubj+'"></td>');
			}
			
			if(headNodeStudent != null) {
				$('#tr_arrow_'+counterStud+'').append('<td class="td_student_'+counterSubj+'"><img src="img/arrow-down.png" alt="down-arrow" width="30"></td>');


				$('#tr_badge_'+counterStud+'').append('<td class="td_student_'+counterSubj+'"><span class="badge badge-pill badge-dark"  onClick="delStudent(\''+headNodeStudent.getName()+'\','+counterSubj+')" title="Eliminar estudiante">'+headNodeStudent.getName()+'</span></td>');
				
				headNodeStudent = headNodeStudent.getNext();
			}else{
				$('#tr_arrow_'+counterStud+'').append('<td class="td_student_'+counterSubj+'"></td>');


				$('#tr_badge_'+counterStud+'').append('<td class="td_student_'+counterSubj+'"></td>');
			}
			
			counterStud++;
		}
		
		counterSubj++;
		headNode = headNode.getNext();
	}
}

function insertAndPrintSubject() {
	myList.insertSubject($('#subjectTxt').val());
	$('#subjectTxt').val("");
	printSubjects();
	printStudents();
}

function insertAndPrintStudent() {
	myList.insertStudent($('#subject_to').val(),$('#nameTxt').val());
	$('#subject_to').val("");
	$('#nameTxt').val("");
	printSubjects();
	printStudents();
}

function delSubject(subject){
	
	var r = confirm("¿Desea eliminar la materia "+subject+"?");
	if (r == true) {
		myList.deleteSubject(subject);
		$('#subjectTxt').val("");
		printSubjects();
		printStudents();
	}
	
}

function delStudent(nameStudent,iSubject){
		var counter=0;
		var tempSubject = myList.getNodeHead();

		while(counter<iSubject) {
			tempSubject=tempSubject.getNext();
			counter++;
		}
	
	var r = confirm("¿Desea eliminar el estudiante "+nameStudent+" de "+tempSubject.getName()+"?");
	if (r == true) {

		myList.deleteStudent(tempSubject.getName(),nameStudent);


		$('#t_students').val("");
		printSubjects();
		printStudents();
	}
	
}

var myList = new SubjectsList();


