from flask import render_template, request, redirect, url_for
from flask_login import login_required, current_user
from ..models import Task
from ..extensions import db
from . import main


@main.route("/")
@login_required
def index():
    tasks = Task.query.filter_by(user_id=current_user.id).all()
    return render_template("main/index.html", tasks=tasks)


@main.route("/add-task", methods=["POST"])
@login_required
def add_task():
    task_name = request.form.get("task")

    if task_name:
        task = Task(
            name=task_name,
            user_id=current_user.id
        )
        db.session.add(task)
        db.session.commit()

    return redirect(url_for("main.index"))


@main.route("/delete-task/<int:id>")
@login_required
def delete_task(id):
    task = Task.query.get_or_404(id)

    if task.user_id == current_user.id:
        db.session.delete(task)
        db.session.commit()

    return redirect(url_for("main.index"))


@main.route("/toggle-task/<int:id>")
@login_required
def toggle_task(id):
    task = Task.query.get_or_404(id)

    if task.user_id == current_user.id:
        task.done = not task.done
        db.session.commit()

    return redirect(url_for("main.index"))