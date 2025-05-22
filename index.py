from flask import Flask, request, jsonify, render_template
import json
import os

app = Flask(__name__)
JSON_FILE = 'feedback.json'

def load_feedbacks():
    if not os.path.exists(JSON_FILE):
        return []
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_feedbacks(feedbacks):
    with open(JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(feedbacks, f, ensure_ascii=False, indent=4)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/submit', methods=['POST'])
def submit():
    review = request.form.get('review', '').strip()
    if not review:
        return jsonify({'status': 'error', 'message': 'Отзыв пустой'}), 400

    feedbacks = load_feedbacks()

    new_id = (feedbacks[-1]['id'] + 1) if feedbacks else 1
    feedbacks.append({'id': new_id, 'review': review})

    try:
        save_feedbacks(feedbacks)
        return jsonify({'status': 'success'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
