module.exports = function(grunt) {
 
  // Grunt的初始化配置
  grunt.initConfig({
    qunit: {
      files: ['test/**/*.html']
    }
  });
 
  // 加载Grunt任务
  grunt.loadNpmTasks('grunt-contrib-qunit');
 
  // 在命令行上输入"grunt test"，test task就会被执行。
  grunt.registerTask('test', ['qunit']);
 
};
