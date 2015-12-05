##############
#   Develop  #
##############

# Useful for development
# It watches for chagnes and updates when it finds them

desc "Watch the site and regenerate when it changes"
task :watch do
  puts "Starting to watch source with Jekyll and Compass."
  Rake::Task[:build].execute
  jekyllPid = Process.spawn("jekyll serve --watch")
  compassPid = Process.spawn("compass watch")

  trap("INT") {
    [jekyllPid, compassPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid, compassPid].each { |pid| Process.wait(pid) }
end

desc "build the site"
task :build do
  system "compass compile"
  system "jekyll build"
end
