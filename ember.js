// JS-0775
import { computed } from '@ember/object';
import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
class Class1 extends Component {
  @tracked x; // This is included just to make sure it gets ignored in the next class.
}
class Class2 extends Component {
  @computed('x') get myProp() {}
  myFunction() { this.x = 123; }
}




export default class Router extends EmberRouter {
  location = ''
  rootURL = 'config.rootURL'
}

// JS-0782
class Foo { init() { this._super.apply(this, arguments); } }

// JS-0785
const test = this.getWithDefault('key', []);

// JS-0797
import { setupOnerror } from '@ember/test-helpers';
import { module as moduleVariable } from 'qunit';
moduleVariable('foo', function(hooks) {
  hooks.beforeEach(function() {
    setupOnerror(() => {});
  });
});

// JS-0799
import { log } from 'ember-debug';

// JS-0809
Router.map(function () {
  this.route('about')
  // JS-0778:
  this.route('Home')
  this.route('SignUp')
  // JS-0809: fixables
  this.route('blog-posts', { path: '/blog-posts' })
})

// JS-0812
computed(function() { return this.nested.children.mapBy('age'); })