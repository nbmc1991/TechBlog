const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-name').value.trim();
    const comment = document.querySelector('#blog-funding').value.trim();
    const content = document.querySelector('#blog-content').value.trim();

    if (title && comment && content) {

        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ title, comment, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog');
        }
    }
};

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);