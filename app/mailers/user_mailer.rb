class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def password_reset(user)
    @user = user
    mail :to => user.email, :subject => "Password Reset"
  end

  def confirm_email(user)
  	@user = user
  	mail :to => user.email, :subject => "Confirm your email"  	
  end
  
end
