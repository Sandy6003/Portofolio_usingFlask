from flask import Flask, render_template, request, flash, redirect, url_for ,send_from_directory
from datetime import datetime
import os

app = Flask(__name__ , static_url_path='/static')
app.secret_key = os.urandom(24).hex()

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

@app.context_processor
def inject_request():
    return {'request': request}

@app.context_processor
def inject_year():
    return {'current_year': datetime.now().year}


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/projects')
def projects():
    return render_template('projects.html')


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name', '').strip()
        email = request.form.get('email', '').strip()
        message = request.form.get('message', '').strip()

        if not all([name, email, message]):
            flash('Please fill in all fields', 'error')
        else:
            flash('Thank you for your message! I will get back to you soon.', 'success')
            return redirect(url_for('contact'))

    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True)