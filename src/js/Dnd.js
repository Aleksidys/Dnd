document.addEventListener('DOMContentLoaded', function() {
    const addTaskButtons = document.querySelectorAll('.add-task');
    const boards = document.querySelector('.boards');
    let draggedElement;

    const onMouseMove = (e) => {
        draggedElement.style.top = e.clientY + "px";
        draggedElement.style.left = e.clientX + "px";
    };

    const onMouseUp = (e) => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        const newBoard = e.target.closest('.board');
        const oldBoard = draggedElement.parentElement;

        if (newBoard && newBoard.querySelector('.list')) {
            const list = newBoard.querySelector('.list');
            list.appendChild(draggedElement);
            draggedElement.style.position = 'relative';
            draggedElement.style.top = null;
            draggedElement.style.left = null;
            draggedElement.classList.remove('dragged');
        } else if (oldBoard && oldBoard == newBoard) {
            draggedElement.classList.remove('dragged');
            draggedElement.style.position = 'relative';
            draggedElement.style.top = null;
            draggedElement.style.left = null;
        }
         else {
            draggedElement.classList.remove('dragged');
            draggedElement.style.position = 'relative';
            draggedElement.style.top = null;
            draggedElement.style.left = null;
        }
    };

    boards.addEventListener('mousedown', function(e) {
        e.preventDefault();

        if (e.target.classList.contains('card')) {
            draggedElement = e.target;
            const rect = draggedElement.getBoundingClientRect();

            draggedElement.style.position = 'fixed';
            draggedElement.style.top = rect.top + 'px';
            draggedElement.style.left = rect.left + 'px';

            draggedElement.classList.add('dragged');

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }
    });

    boards.addEventListener('dragover', function(e) {
        e.preventDefault();
        const targetBoard = e.target.closest('.board');
        if (targetBoard) {
            targetBoard.classList.add('over');
        }
    });

    boards.addEventListener('dragleave', function(e) {
        const targetBoard = e.target.closest('.board');
        if (targetBoard) {
            targetBoard.classList.remove('over');
        }
    });

    addTaskButtons.forEach(button => {
        button.addEventListener('click', function() {
            const closestBoard = button.closest('.board');
            const textareaButton = closestBoard.querySelector('.textarea-button');
            textareaButton.classList.toggle('show-textarea-button');
            const textarea = textareaButton.querySelector('.textarea');
            const sendButton = textareaButton.querySelector('.send');

            textarea.removeAttribute('disabled');
            textarea.focus();

            sendButton.addEventListener('click', function() {
                const list = closestBoard.querySelector('.list');
                const taskText = textarea.value.trim();

                if (taskText !== '') {
                    const newTask = document.createElement('div');
                    newTask.classList.add('card');
                    newTask.textContent = taskText;

                    list.appendChild(newTask);
                    textarea.value = '';
                } else {
                    return
                }
            });
        });
    });

    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('click', function() {
            this.focus();
        });
    });
});
