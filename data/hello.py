from flask import Flask    # 引入框架
from flask import request  # 引入request
import helloDef # 当前目录

app = Flask(__name__)


@app.route('/controller/hello', methods=['POST', 'GET'])
def hello():
    print(request.data)
    return helloDef.printMe()

if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='127.0.0.1', port=5000)
