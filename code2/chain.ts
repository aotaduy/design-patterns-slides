abstract class AbstractHandler {
    next: AbstractHandler
    abstract handle(request)
    setNext(handler: AbstractHandler)
}
class LogHandler extends AbstractHandler {

    handle(request){

        console.log(request);

        this.doSomethingAndContinue();

        return this.next.handle(request)

    }
}
class TerminalHandler extends AbstractHandler {

    handle(request){

        return this.doSomethingAndCutTheChain()
    }
}
}
