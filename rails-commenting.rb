# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This code tells us that the class "BlogsPostController" is inheriting from "ApplicationController" class.
class BlogPostsController < ApplicationController
  def index
    # ---2) @post is being told to list out all BlogPost that has been created
    @posts = BlogPost.all
  end

  # ---3) This line of code is showing that the user will be able to see a specific, single BlogPost that is assigned to that specific id number in the database in the order it was created.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This line of code allows the user to execute the function of allowing new BlogPost to be created in the DB.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This line of code allows new BlogPost to be created using the new controller above, in accordance with the blog_post_params strong params.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This line of code allows a specific BlogPost to be called upon by its id number, so that it can be updated or edited.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This line of code will update the BlogPost that was called in the edit controller above, and submit those changes.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This line of code tells the website to redirect back to landing page once the post has been deleted.
      redirect_to blog_posts_path
    end
  end

  # ---9) Private tells us that a strong param is being used, and that the method can only be called from inside the class where it is defined.
  private
  def blog_post_params
    # ---10) This line of code is telling us that the blog_post parameter is requiring specific arguments to be inputted before it is accepted, and that only the title, and contents of the new blog is allowed to be created or edited
    params.require(:blog_post).permit(:title, :content)
  end
end
