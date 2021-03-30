 function myFunction() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }
        function checkDate(){
        var dateValid=true;
		if(document.getElementById("date").value == ""){
            document.getElementById("date").style.borderColor = "#C15132";
            document.getElementById("date").style.backgroundColor = '#C15132';
            dateValid = false;
            return dateValid;
        }
        else{
            document.getElementById("date").style.borderColor = "";
            document.getElementById("date").style.backgroundColor = "";
            dateValid = true;
        }
            
		var visit_date = document.getElementById('date').value;

		// get todays date from the operating system
		var today = new Date();

		// grab the day number from the object today
		var dd = today.getDate();

		// grab the month number from the object today
		var mm = today.getMonth()+1;

		// grab the year number(4 digit format) from the object today
		var yyyy = today.getFullYear();

		//Must format todays day number to be two digits
		if (dd < 10) {
			dd = '0' + dd;
		}  

		//Must format todays month number to be two digits
		if (mm < 10) {
			mm = '0' + mm;
		}  

		// string concatenation
		var td = "" + yyyy + "-" + mm + "-" + dd;

		//check to see if today(td) is equal or greater than visit_date date to drink
		if (td >= visit_date){
			document.getElementById('dateFeedback').innerHTML="";
			document.getElementById("date").style.border = null;
			document.getElementById("dateFeedback").style = null;
			dateValid = true;
		}
		else {
			document.getElementById('dateFeedback').innerHTML = "  ** Warning: Dates after today are not acceptable **  ";
			document.getElementById("date").style.borderColor = "red";
			document.getElementById("dateFeedback").style.backgroundColor = '#C15132';
			dateValid = false;
		} // end of else path


		return (dateValid);
	}//end of function to check if the users age is 21 or older

    function checkRadSelected(){
        var isSelected = false;
        var itemsLength = document.getElementsByName("fav_visited").length;
        var selectedItems = new Array();
        for(var j = 0; j < itemsLength; j++){
            if(document.getElementsByName("fav_visited")[j].checked){
                selectedItems.push(document.getElementsByName("fav_visited")[j].value);
            }
        } // end of for loop

        if(selectedItems.length > 0){
            document.getElementsByTagName("fieldset")[0].style.borderColor = "";
            document.getElementsByTagName("legend")[0].style.color = "";
            isSelected = true;
        }
        else{
            document.getElementsByTagName("fieldset")[0].style.borderColor = "#C15132";
            document.getElementsByTagName("legend")[0].style.color = "#C15132";
        }

        return isSelected;
    }
    function checkEmail(){
        isvalid = false;
        if(document.getElementById("email").value == ""){
            document.getElementById("email").style.borderColor = "#C15132";
            document.getElementById("email").style.backgroundColor = '#C15132';
            isvalid = false;
        }
        else {
            document.getElementById("email").style.borderColor = null;
            document.getElementById("email").style.backgroundColor = null;
            isvalid = true;
        }
        return(isvalid);
    }
    function checkGroup(){
        isvalid = false;
        if(document.getElementById("group").value == ""){
            document.getElementById("group").style.borderColor = "#C15132";
            document.getElementById("group").style.backgroundColor = '#C15132';
            isvalid = false;
        }
        else {
            document.getElementById("group").style.borderColor = null;
            document.getElementById("group").style.backgroundColor = null;
            isvalid = true;
        }
        return(isvalid);
    }
    function validateForm() {
        isvalid = true;
        
        if (document.getElementById("name").value == "") {
            document.getElementById("name").style.borderColor = "#C15132";
            document.getElementById("name").style.backgroundColor = '#C15132';
            isvalid = false;
        }
        else {
            document.getElementById("name").style.borderColor = null;
            document.getElementById("name").style.backgroundColor = null;
            isvalid = true;
        }
        

		crct_date = false;
        isRadSelected = false;
        checkmail = false;
        checkgroup = false;
        
		crct_date = checkDate();
        isRadSelected = checkRadSelected()
        checkmail = checkEmail();
        checkgroup = checkGroup();
		//alert("Please hold screen");
        return (isvalid && crct_date && isRadSelected && checkmail && checkGroup);

	}