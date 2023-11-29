
function enableEditMode() {
      const paragraph = document.getElementById('editableParagraph');
      const editButton = document.getElementById('editButton');
      const editContainer = document.getElementById('editContainer');
      const editTextArea = document.getElementById('editTextArea');
      const editheading = document.getElementById('editheading');

      editTextArea.value = paragraph.innerText;
      editContainer.style.display = 'block';
      paragraph.style.display = 'none';
      editButton.innerText = 'Save';
      editButton.onclick = saveChanges;
    }

    function saveChanges() {
      const paragraph = document.getElementById('editableParagraph');
      const editButton = document.getElementById('editButton');
      const editContainer = document.getElementById('editContainer');
      const editTextArea = document.getElementById('editTextArea');
      const editheading = document.getElementById('editheading');

      paragraph.innerText = editTextArea.value;
      editContainer.style.display = 'none';
      paragraph.style.display = 'block';
      
        editheading.innerText='UPDATED:Everything you should know about'+'module'+'and'+'requires'+' in node.js';

      editButton.innerText = 'Edit';

      editButton.onclick = enableEditMode;
    }
    let likeCount = 0; // Initial like count

    function toggleLike() {
        const likeButton = document.getElementById('likeButton');
        const likeCountElement = document.getElementById('likedit');
 
        // Toggle like button text

            likeButton.innerHTML = 'liked';
            likeCount++;
            likeCountElement.innertext = likeCount + 'person likes this!';
        
        } 
    function toggleLike1() {
        const likeButton = document.getElementById('likeButton');
        const likeCountElement = document.getElementById('likedit');
        if (likeButton.innerHTML === 'Liked'){
            likeButton.innerHTML = 'Like';
            likeCount--;
            likeCountElement.innertext='Be the first one to like this!';
        }
    }
 
           // Append the comment to the comments container
       function addComment() {
            var commentInput = document.getElementById('comment-input');
            var commentsTable = document.getElementById('commentsBody');
          
            // Get the current comment and clear the textarea
            var comment = commentInput.value.trim();
            commentInput.value = '';
          
            // If there's a comment, add it to the table
            if (comment !== '') {
              // Create a new row for the comment
              var row = commentsTable.insertRow();
              var cell = row.insertCell(0);
              cell.textContent = comment;
          
              // Display the table
              var tableDisplay = document.getElementById('commentsTable');
              tableDisplay.style.display = 'table';
            }
          }
          
